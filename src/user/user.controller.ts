import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from "@nestjs/common";
import { HasRoles } from "src/auth/decorator/roles.decorator";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { User } from "src/models/user.model";
import { GetUser } from "../auth/decorator/get-user.decorator";
import { UserService } from "./user.service";
@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @HasRoles("admin")
  @UseGuards(RolesGuard)
  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get("me")
  getMe(@GetUser() user: User, @GetUser("email") email: string) {
    return user;
  }

  @Get(":id")
  getUser(@Param("id") id: string) {
    return this.userService.findOne(Number(id));
  }

  @Put(":id")
  updateUser(@Body() data: User, @Param("id") id: string) {
    return this.userService.updateOne(Number(id), data);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    return this.userService.deleteOne(Number(id));
  }
}
