/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserRegistration` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `eventId` to the `UserRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserRegistration" DROP CONSTRAINT "UserRegistration_id_fkey";

-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "photo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRegistration" ADD COLUMN     "eventId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserRegistration_email_key" ON "UserRegistration"("email");

-- AddForeignKey
ALTER TABLE "UserRegistration" ADD CONSTRAINT "UserRegistration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
