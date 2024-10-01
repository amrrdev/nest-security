import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
    accessTokenTtl: process.env.JWT_ACCESS_TOKEN_TTL,
    refreshTokenTtl: process.env.JWT_REFRESH_TOKEN_TLL,
  };
});
