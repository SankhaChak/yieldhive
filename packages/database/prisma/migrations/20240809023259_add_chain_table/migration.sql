-- CreateEnum
CREATE TYPE "ChainNetwork" AS ENUM ('Mainnet', 'Testnet');

-- CreateTable
CREATE TABLE "Chain" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "network" "ChainNetwork" NOT NULL,

    CONSTRAINT "Chain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChainToProtocol" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Chain_name_key" ON "Chain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ChainToProtocol_AB_unique" ON "_ChainToProtocol"("A", "B");

-- CreateIndex
CREATE INDEX "_ChainToProtocol_B_index" ON "_ChainToProtocol"("B");

-- AddForeignKey
ALTER TABLE "_ChainToProtocol" ADD CONSTRAINT "_ChainToProtocol_A_fkey" FOREIGN KEY ("A") REFERENCES "Chain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChainToProtocol" ADD CONSTRAINT "_ChainToProtocol_B_fkey" FOREIGN KEY ("B") REFERENCES "Protocol"("id") ON DELETE CASCADE ON UPDATE CASCADE;
