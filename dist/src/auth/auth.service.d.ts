import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(dto: AuthDto): Promise<import(".prisma/client").User>;
    signIn(dto: AuthDto): Promise<import(".prisma/client").User>;
}
