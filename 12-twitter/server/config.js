import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET_KEY"),
    expiresDays: parseInt(required("JWT_EXPIRES_DAYS", 172800)),
  },
  bcrypt: {
    saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 10)),
  },
  cors: {
    allowdOrigin: required("CORS_ALLOWED_ORIGIN"),
  },
  rateLimit: {
    windowMs: required("RATE_LIMIT_WINDOWMS"),
    max: required("RATE_LIMIT_MAX"),
  },
  host: {
    port: parseInt(required("HOST_PORT", 8080)),
  },
  db: {
    host: required("DB_HOST"),
  },
  csrf: {
    plainToken: required("CSRF_SECRET_KEY"),
  },
};
