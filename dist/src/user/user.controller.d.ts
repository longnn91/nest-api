/// <reference types="multer" />
import { User, UserRole } from "src/models/user.model";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(queryData: any): Promise<{
        data: import(".prisma/client").User[];
        pagination: {
            page: number;
            limit: number;
            total: number;
        };
    }>;
    getMe(user: User, email: string): User;
    getUser(id: string): Promise<import(".prisma/client").User>;
    updateUser(data: User, id: string): Promise<any>;
    deleteUser(id: string): Promise<import(".prisma/client").User>;
    updateUserRole(id: string, data: {
        role: UserRole;
    }): Promise<any>;
    uploadFile(file: Express.Multer.File): void;
}
