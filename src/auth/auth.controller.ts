import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { User } from "src/models/user.model";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("sign-up")
  signUp(@Body() body: User) {
    return this.authService.signUp(body);
  }

  @Post("sign-in")
  signIn(@Body() body: AuthDto) {
    return this.authService.signIn(body);
  }

  @Get("google")
  @UseGuards(AuthGuard("google"))
  async googleAuth(@Req() req) {}

  @Get("google-redirect")
  @UseGuards(AuthGuard("google"))
  googleAuthRedirect(@Req() req) {
    return this.authService.googleLogin(req);
  }
}
