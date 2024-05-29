/*
  Warnings:

  - You are about to drop the column `photo` on the `Events` table. All the data in the column will be lost.
  - You are about to drop the `UserRegistration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRegistration" DROP CONSTRAINT "UserRegistration_eventId_fkey";

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "photo";

-- DropTable
DROP TABLE "UserRegistration";

-- CreateTable
CREATE TABLE "Registartion" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "whereKnow" "WereKnowStatus" NOT NULL,
    "eventsId" INTEGER,

    CONSTRAINT "Registartion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registartion_email_key" ON "Registartion"("email");

-- AddForeignKey
ALTER TABLE "Registartion" ADD CONSTRAINT "Registartion_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "Events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
