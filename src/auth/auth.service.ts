import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "src/models/user.model";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signUp(userData: User) {
    const { email, password, firstName, lastName } = userData;
    const hash = await argon.hash(password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          hash,
        },
      });

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async signIn(dto: AuthDto) {
    /**Find the user by email */
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException("Credentials incorrect");

    /**Compare password */
    const pwMatches = await argon.verify(user.hash, dto.password);

    if (!pwMatches) throw new ForbiddenException("Credentials incorrect");
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get("JWT_SECRET");

    const token = await this.jwt.signAsync(payload, {
      expiresIn: "15d",
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  googleLogin(req) {
    if (!req.user) {
      return "No user from google";
    }

    return {
      message: "User information from google",
      user: req.user,
    };
  }
}
