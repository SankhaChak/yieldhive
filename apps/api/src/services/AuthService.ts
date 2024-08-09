import { UserTable } from "../utils/types/db";

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

    return user;
  }

  async getUserById(userId: string) {
    const user = await this.userTable.findUnique({
      where: { id: userId },
    });

    return user;
  }
}

export default AuthService;
