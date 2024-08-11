/*
  Warnings:

  - Added the required column `pyth_contract_abi_url` to the `Chain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chain" ADD COLUMN     "pyth_contract_abi_url" TEXT NOT NULL;
