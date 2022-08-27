import { Injectable } from "@nestjs/common";
import argon from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signUp(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    return { msg: "I am sign up" };
  }

  signIn() {
    return { msg: "I am sign in" };
  }
}
