import { model, Schema } from 'mongoose';
import { TUser } from '../interface/user.interface';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'deliveryMan', 'admin'],
      required: true,
    },
    phone: {
      type: Number,
      reqired: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
