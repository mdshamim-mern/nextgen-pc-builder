import { NextFunction, Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../shared/catchAsync';
import { jwtHelpers } from '../../helpers/jwtHelpers'; 

const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(401, 'You are not authorized!');
    }

    const verifiedUser = jwtHelpers.verifyToken(token, config.jwt_access_secret as Secret) as any;

    (req as any).user = verifiedUser;

    if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
      throw new AppError(403, 'Forbidden!');
    }

    next();
  });
};

export default auth;