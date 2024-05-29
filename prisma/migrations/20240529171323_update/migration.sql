-- CreateEnum
CREATE TYPE "WereKnowStatus" AS ENUM ('SocialMedia', 'Friends', 'FoundMySelf');

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "organizer" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("id")
);

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
