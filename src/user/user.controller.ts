import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { HasRoles } from "src/auth/decorator/roles.decorator";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { User, UserRole } from "src/models/user.model";
import { GetUser } from "src/auth/decorator/get-user.decorator";
import { UserService } from "./user.service";
import { FileInterceptor } from "@nestjs/platform-express/multer";
@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @HasRoles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  getUsers(@Query() queryData) {
    return this.userService.findAll(queryData);
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

  @Put(":id/role")
  updateUserRole(@Param("id") id: string, @Body() data: { role: UserRole }) {
    return this.userService.updateRole(Number(id), data.role);
  }

  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log({ file });
  }
}
