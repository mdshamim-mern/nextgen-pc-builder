import { Prisma } from '@prisma/client';

type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = 'Prisma Error';
  let statusCode = 400;

  if (error.code === 'P2025') {
    message = 'Record not found';
    errors = [
      {
        path: '',
        message: (error.meta?.cause as string) || 'Record not found',
      },
    ];
    statusCode = 404;
  } 
  else if (error.code === 'P2002') {
    message = 'Duplicate Entry';
    errors = [
      {
        path: '',
        message: `Duplicate value for ${error.meta?.target}`,
      },
    ];
    statusCode = 409;
  }

  return {
    statusCode,
    message,
    errorSources: errors,
  };
};

export default handlePrismaError;