import { prisma } from "@yieldhive/database";

type UserTable = typeof prisma.user;

class AuthService {
  private userTable: UserTable;

  constructor(userTable: UserTable) {
    this.userTable = userTable;
  }

  async authenticateUser(walletAddress: string) {
    const user = await this.userTable.upsert({
      where: { wallet_address: walletAddress },
      create: { wallet_address: walletAddress },
      update: { wallet_address: walletAddress },
    });

    return { id: user.id };
  }
}

export default AuthService;
