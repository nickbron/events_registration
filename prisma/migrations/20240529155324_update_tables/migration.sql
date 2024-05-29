/*
  Warnings:

  - You are about to drop the `Registartion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Registartion" DROP CONSTRAINT "Registartion_eventsId_fkey";

-- DropTable
DROP TABLE "Registartion";

-- CreateTable
CREATE TABLE "Registration" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL,
    "whereKnow" "WereKnowStatus" NOT NULL DEFAULT 'Friends',
    "eventsId" TEXT,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_email_key" ON "Registration"("email");

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "Events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
