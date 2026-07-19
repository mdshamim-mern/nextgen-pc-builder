import { ZodError, ZodIssue } from 'zod';

type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

const handleZodError = (error: ZodError) => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources: errors,
  };
};

export default handleZodError;