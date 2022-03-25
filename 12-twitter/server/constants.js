import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRES_DAYS = process.env.JWT_EXPIRES_DAYS;
export const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;
