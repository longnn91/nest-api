import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: AuthDto): Promise<import(".prisma/client").User>;
    signIn(body: AuthDto): Promise<import(".prisma/client").User>;
}
