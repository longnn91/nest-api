import { User } from "./user.model";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import(".prisma/client").User[]>;
    getMe(user: User, email: string): User;
    getUser(id: string): Promise<import(".prisma/client").User>;
    updateUser(data: User, id: string): Promise<any>;
    deleteUser(id: string): Promise<import(".prisma/client").User>;
}
