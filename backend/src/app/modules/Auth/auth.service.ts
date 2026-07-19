import { PrismaClient } from '@prisma/client';
import AppError from '../../errors/AppError';
import bcrypt from 'bcrypt';
import config from '../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const prisma = new PrismaClient();

const loginUser = async (payload: any) => {
  const user = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!user) throw new AppError(404, 'User does not exist');

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) throw new AppError(401, 'Password incorrect');

  const accessToken = jwtHelpers.createToken(
    { email: user.email, role: user.role },
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return { accessToken };
};

export const AuthService = { loginUser };