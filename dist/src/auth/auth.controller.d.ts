import { User } from "src/models/user.model";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: User): Promise<{
        access_token: string;
    }>;
    signIn(body: AuthDto): Promise<{
        access_token: string;
    }>;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
