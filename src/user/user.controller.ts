import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { User } from "@prisma/client";
import { GetUser } from "../auth/decorator/get-user.decorator";

@Controller("users")
export class UserController {
  @UseGuards(JwtGuard)
  @Get("me")
  getMe(@GetUser() user: User, @GetUser("email") email: string) {
    console.log("em", email);
    return user;
  }
}
