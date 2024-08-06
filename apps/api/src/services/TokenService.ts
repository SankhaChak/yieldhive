import { JwtPayload, sign } from "jsonwebtoken";
import { ENV } from "../config/env";

class TokenService {
  generateAccessToken(payload: JwtPayload) {
    const accessToken = sign(payload, ENV.JWT_SECRET);

    return accessToken;
  }

  // TODO: Evaluate if we need a refresh token + Maybe add the access token to the db and clear it on logout ? Should ideally add a layer of cache to have fast read/write
}

export default TokenService;
