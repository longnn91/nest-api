import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "src/models/user.model";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(userData: User): Promise<{
        access_token: string;
    }>;
    signIn(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
    googleLogin(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
