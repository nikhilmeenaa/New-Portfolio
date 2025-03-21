import { z } from 'zod';
import validator from 'validator';

export const ZodUserRegisterRequestSchemaValidator = z.object({
  name: z
    .string()
    .min(1, { message: 'Name should be at least 1 character' })
    .optional(),
  email: z
    .string()
    .email({ message: 'given email is not a valid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password should be at least 8 characters' }),
});

// Infer TypeScript type from schema
export type UserSchema = z.infer<typeof ZodUserRegisterRequestSchemaValidator>;

export const ZodUserDetailsEditRequestSchemaValidator = z.object({
  name: z.string().min(1, { message: 'Name should be at least 1 character' }),
  phoneNo: z.string().refine(validator.isMobilePhone),
});

// Infer TypeScript type from schema
export type UserEditRequestSchema = z.infer<
  typeof ZodUserDetailsEditRequestSchemaValidator
>;
