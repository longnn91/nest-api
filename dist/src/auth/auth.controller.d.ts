import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: AuthDto): Promise<{
        msg: string;
    }>;
    signIn(): {
        msg: string;
    };
}
