-- AlterTable
ALTER TABLE `issue` ADD COLUMN `assignedToUserID` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assignedToUserID_fkey` FOREIGN KEY (`assignedToUserID`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
