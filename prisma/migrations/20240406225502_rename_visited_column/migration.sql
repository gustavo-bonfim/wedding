/*
  Warnings:

  - You are about to drop the column `first_visited_at` on the `Invite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "first_visited_at",
ADD COLUMN     "last_visited_at" TIMESTAMP(3);
