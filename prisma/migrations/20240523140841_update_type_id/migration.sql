/*
  Warnings:

  - The primary key for the `Events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Events` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `UserRegistration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `UserRegistration` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "UserRegistration" DROP CONSTRAINT "UserRegistration_id_fkey";

-- AlterTable
ALTER TABLE "Events" DROP CONSTRAINT "Events_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UserRegistration" DROP CONSTRAINT "UserRegistration_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "UserRegistration_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "UserRegistration" ADD CONSTRAINT "UserRegistration_id_fkey" FOREIGN KEY ("id") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
