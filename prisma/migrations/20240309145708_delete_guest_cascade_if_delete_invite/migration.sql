-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_inviteId_fkey";

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_inviteId_fkey" FOREIGN KEY ("inviteId") REFERENCES "Invite"("id") ON DELETE CASCADE ON UPDATE CASCADE;
