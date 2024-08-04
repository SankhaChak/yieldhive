-- CreateEnum
CREATE TYPE "TxnStatus" AS ENUM ('Processing', 'Success', 'Failure');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "wallet_address" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Protocol" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "Protocol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_url" TEXT NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Strategy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "apy" TEXT NOT NULL,
    "multiplier" TEXT NOT NULL,
    "price_feeds" TEXT[],

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "yield" TEXT NOT NULL,
    "protocol_id" TEXT NOT NULL,
    "token_id" TEXT NOT NULL,
    "strategy_id" TEXT NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Risk" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "strategy_id" TEXT NOT NULL,

    CONSTRAINT "Risk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionHistory" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transactionType" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "TxnStatus" NOT NULL DEFAULT 'Processing',

    CONSTRAINT "TransactionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProtocolToStrategy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StrategyToToken" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_wallet_address_key" ON "User"("wallet_address");

-- CreateIndex
CREATE INDEX "User_wallet_address_idx" ON "User"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "Protocol_name_key" ON "Protocol"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Strategy_name_key" ON "Strategy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Strategy_slug_key" ON "Strategy"("slug");

-- CreateIndex
CREATE INDEX "Strategy_slug_idx" ON "Strategy"("slug");

-- CreateIndex
CREATE INDEX "Step_strategy_id_idx" ON "Step"("strategy_id");

-- CreateIndex
CREATE INDEX "Risk_strategy_id_idx" ON "Risk"("strategy_id");

-- CreateIndex
CREATE INDEX "TransactionHistory_user_id_idx" ON "TransactionHistory"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ProtocolToStrategy_AB_unique" ON "_ProtocolToStrategy"("A", "B");

-- CreateIndex
CREATE INDEX "_ProtocolToStrategy_B_index" ON "_ProtocolToStrategy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StrategyToToken_AB_unique" ON "_StrategyToToken"("A", "B");

-- CreateIndex
CREATE INDEX "_StrategyToToken_B_index" ON "_StrategyToToken"("B");

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_protocol_id_fkey" FOREIGN KEY ("protocol_id") REFERENCES "Protocol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "Token"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_strategy_id_fkey" FOREIGN KEY ("strategy_id") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Risk" ADD CONSTRAINT "Risk_strategy_id_fkey" FOREIGN KEY ("strategy_id") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionHistory" ADD CONSTRAINT "TransactionHistory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProtocolToStrategy" ADD CONSTRAINT "_ProtocolToStrategy_A_fkey" FOREIGN KEY ("A") REFERENCES "Protocol"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProtocolToStrategy" ADD CONSTRAINT "_ProtocolToStrategy_B_fkey" FOREIGN KEY ("B") REFERENCES "Strategy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StrategyToToken" ADD CONSTRAINT "_StrategyToToken_A_fkey" FOREIGN KEY ("A") REFERENCES "Strategy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StrategyToToken" ADD CONSTRAINT "_StrategyToToken_B_fkey" FOREIGN KEY ("B") REFERENCES "Token"("id") ON DELETE CASCADE ON UPDATE CASCADE;
