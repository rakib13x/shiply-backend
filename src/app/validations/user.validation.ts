import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(6, { message: 'name is required' }),
    email: z.string().min(8, { message: 'email is required' }),
    role: z.enum(['user', 'deliveryMan', 'admin']),
    phone: z.number().min(11, { message: 'Phone number is required!' }),
    address: z.string().min(6, { message: 'Address is required' }),
    password: z.string({ invalid_type_error: 'Password must be String' }),
  }),
});
