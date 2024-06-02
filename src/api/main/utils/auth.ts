import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const checkPassword = async (saved: string, provided: string) =>
  await bcrypt.compare(saved, provided);

export const generatePassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const getToken = (data: {name: string, password: ''}): string => {
  return jwt.sign({ ...data }, process.env.TOKEN_SECRET || '', {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};
