export interface User {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  USER = "USER",
}
