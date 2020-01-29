import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  readonly password: string;
  created: Date;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  email: string;
  password: string;
}

export interface Payload {
  email: string;
  iat?: number;
  expiresIn?: string;
}

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: {
    type: String,
    select: false,
  },
  created: { type: Date, default: Date.now },
  Role: { type: String, default: 'Simple User' }
});

UserSchema.pre('save', async function(next: mongoose.HookNextFunction) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});
