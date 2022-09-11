import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prismaService;
    constructor(config: ConfigService, prismaService: PrismaService);
    validate(payload: {
        email: string;
        sub: number;
    }): Promise<import(".prisma/client").User>;
}
export {};
