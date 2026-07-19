import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../config';
import AppError from '../errors/AppError';
import handlePrismaError from '../errors/handlePrismaError';
import handleZodError from '../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources: { path: string | number; message: string }[] = [
    { path: '', message: 'Something went wrong' }
  ];

  if (error instanceof ZodError) {
    const simplified = handleZodError(error);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (error?.code && error.code.startsWith('P')) {
    const simplified = handlePrismaError(error);
    statusCode = simplified.statusCode;
    message = simplified.message;
    errorSources = simplified.errorSources;
  } else if (error instanceof AppError) {
    statusCode = error.statusCode;
    message = error.message;
    errorSources = [{ path: '', message: error.message }];
  } else if (error instanceof Error) {
    message = error.message;
    errorSources = [{ path: '', message: error.message }];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.env === 'development' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;