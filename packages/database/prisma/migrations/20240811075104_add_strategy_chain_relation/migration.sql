/*
  Warnings:

  - Added the required column `pyth_contract_address` to the `Chain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chainId` to the `Strategy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contract_address` to the `Strategy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chain" ADD COLUMN     "pyth_contract_address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Strategy" ADD COLUMN     "chainId" TEXT NOT NULL,
ADD COLUMN     "contract_address" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Strategy" ADD CONSTRAINT "Strategy_chainId_fkey" FOREIGN KEY ("chainId") REFERENCES "Chain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
