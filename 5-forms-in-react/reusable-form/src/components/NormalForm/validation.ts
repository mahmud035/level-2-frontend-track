import { z } from 'zod';

//* Zod Schema
export const schema = z.object({
  // test: z.string(),
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  password: z.string().min(8, 'Password is too short'),
});

export type TSchema = z.infer<typeof schema>;
