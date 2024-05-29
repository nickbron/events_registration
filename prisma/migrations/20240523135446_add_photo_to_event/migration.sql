/*
  Warnings:

  - You are about to drop the column `user_id` on the `Events` table. All the data in the column will be lost.
  - Added the required column `eventDate` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Events` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `whereKnow` on the `UserRegistration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "WereKnowStatus" AS ENUM ('SocialMedia', 'Friends', 'FoundMySelf');

-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_user_id_fkey";

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "user_id",
ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserRegistration" DROP COLUMN "whereKnow",
ADD COLUMN     "whereKnow" "WereKnowStatus" NOT NULL;

-- AddForeignKey
ALTER TABLE "UserRegistration" ADD CONSTRAINT "UserRegistration_id_fkey" FOREIGN KEY ("id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
