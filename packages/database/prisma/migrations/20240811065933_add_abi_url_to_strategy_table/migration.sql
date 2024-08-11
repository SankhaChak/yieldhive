/*
  Warnings:

  - You are about to drop the column `image_url` on the `Strategy` table. All the data in the column will be lost.
  - Added the required column `abi_url` to the `Strategy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Strategy" DROP COLUMN "image_url",
ADD COLUMN     "abi_url" TEXT NOT NULL;
