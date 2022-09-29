import { Injectable } from "@nestjs/common";
import { UserRole } from "src/models/user.model";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    delete user.hash;
    return user;
  }

  async updateOne(id: number, data) {
    delete data.email;
    delete data.id;
    try {
      const user = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
      delete user.hash;
      return user;
    } catch (error) {
      return error;
    }
  }

  async updateRole(id: number, role: UserRole) {
    try {
      return await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          role,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async deleteOne(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
