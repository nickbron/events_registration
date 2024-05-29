/*
  Warnings:

  - The primary key for the `Events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Registartion` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Registartion" DROP CONSTRAINT "Registartion_eventsId_fkey";

-- AlterTable
ALTER TABLE "Events" DROP CONSTRAINT "Events_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Events_id_seq";

-- AlterTable
ALTER TABLE "Registartion" DROP CONSTRAINT "Registartion_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "eventsId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Registartion_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Registartion_id_seq";

-- AddForeignKey
ALTER TABLE "Registartion" ADD CONSTRAINT "Registartion_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "Events"("id") ON DELETE SET NULL ON UPDATE CASCADE;
