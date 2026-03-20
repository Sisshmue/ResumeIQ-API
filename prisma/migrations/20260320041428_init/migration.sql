/*
  Warnings:

  - You are about to drop the column `resommendation` on the `Recommendation` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `recommendation` to the `Recommendation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recommendation" DROP COLUMN "resommendation",
ADD COLUMN     "recommendation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Resume" ALTER COLUMN "fileType" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
