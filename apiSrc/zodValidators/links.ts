import { z } from 'zod';

export const ZodLinkRequestSchemaValidator = z.object({
  name: z
    .string()
    .min(4, { message: 'Link name should have atleast 4 characters' }),
  linkUrl: z.string(),
  platform: z.string().optional(),
  searchTags: z.array(z.string()).optional(),
  contentType: z.string().optional(),
  adsEnabled: z.boolean().default(false),
  adsConfiguration: z.object({}).catchall(z.any()).optional(),
});

// Infer TypeScript type from schema
export type LinkSchema = z.infer<typeof ZodLinkRequestSchemaValidator>;
