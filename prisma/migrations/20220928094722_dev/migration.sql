-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('ADMIN', 'USER', 'EDITOR') NOT NULL DEFAULT 'USER';
