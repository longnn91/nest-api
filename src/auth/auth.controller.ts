import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("sign-up")
  signUp(@Body() body: AuthDto) {
    return this.authService.signUp(body);
  }

  @Post("sign-in")
  signIn() {
    return this.authService.signIn();
  }
}
