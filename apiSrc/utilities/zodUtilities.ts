import { ZodError } from 'zod';

export const formatZodErrorsUtil = (error: ZodError) => {
  const formattedErrors = error.errors.map((err) => ({
    path: err.path.join('.'),
    message: err.message,
  }));
  return formattedErrors;
};
