import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  readonly password: string;
  created: Date;
  profile: string;
  banner: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  fullname: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  birth: Date;
}

export interface Payload {
  email: string;
  iat?: number;
  expiresIn?: string;
}

export const UserSchema = new mongoose.Schema({
  fullname: { type: String },
  gender: { type: String, default: 'none' },
  email: { type: String, required: true },
  password: {
    type: String,
    select: false,
  },
  created: { type: Date, default: Date.now },
  Role: { type: String, default: 'Simple User' },
  phone: { type: String },
  birth: { type: Date, default: Date.now },
  profile: {
    type: String,
    default:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDw0NDQ0PDQ8NDQ0OFhEWFxURExUYHSggGBomGxMTITEhJTUrLy4uFx84ODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQUDBAYC/8QANBABAAIBAQUEBwgDAQAAAAAAAAECAxEEBRIhQTFRYXEGIjJSgaHBE0JDcpGx0eEjM2Ki/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAJAAAAAAAAAABvbLuvLk0nSKVnrb6QDRHQYdy4o9ubX+PDHybNd3YI/Cr8dZ/cHLDqp3fgn8KnwjT9mvl3Nhn2eKk+EzMfMHOiy2nc+WnOkxkjw5W/RXTExMxPKY7Y7gQAAAAAAAAAAAAAAAAAAAA94cVr2itY1mejzWszMREazPKIjtmXTbt2GMNek3t7U/SPAGPd+7KYtLW9a/f0r5LFCQAAAAGptuw0zRzjS3S8dsfy2wHJbXs18NuG8eU9JhgdbtezVy0mtvhPWs98OW2jBbHeaW7Y/SY6TAMYAAAAAAAAAAAAAAAAALfcOy6zOWfu+rXz6yvWDYsP2eKlO6OfnPOWcAAEJAAEAkABWb82Xjp9pHtY9dfGqzebxExMT2TExPkDjRk2jHwXtT3ZmGMAAAAAAAAAAAAAABm2OnFlx177118tWFtbs/34vzfSQdUAAAAAAAAAAADm9900z2n3orPy0+ivWfpB/tr+SP3lWAAAAAAAAAAAAAAAMuyX4cuO3des/DViAdoNbYM/2mKluumk+ccpbIAAAAAAAAAPOS8VrNp7IiZnygHOb7vrntHuxWvy1+rQe81+O9rT96Zl4AAAAAAAAAAAAAAAABa7j2rhtOKey/OvhZfuMh0e6tvjLXhtOmSvb/1HfALAAEJAAAAABU792vhrGKO2/O3hX+25t211w01nnafZr1mXMZclr2m9p1tadZB4AAAAAAAAAAAAAAAAAAeqWmsxNZmJjsmO15bmx7tyZdJiOGvvW6+UdQWe797VtpXLpW3Zxfdt/C0iWls268NOcxx277fSOxuxAJEJAAAaG3bzx4uUaXv7sTyjzlvtPad3YsmszXS3vV5T/YOb2jPfJabXnWZ/SI7oY1htm6smPWa+vXvj2o84V4AAAAAAAAAAAAAAAAD1Ss2mIrEzMzpER2zJSk2mK1jWZnSIh0m7d31wxrOk5JjnOnZ4QDX3fumKaXyxxW6V7a1/mVrCQAEAkQkAAAABXbw3XXL61fVyd/S3msQHHZsVqWmtomJjo8Oq27YqZq6TytHs205x/Tmc+G2O01tGkx8474BjAAAAAAAAAAAABZ7l2Pjt9paPVpPLxsDf3RsH2ccd4/yW/wDMd3msgAAAAAAAAAAAAAaW8tijNTlyvX2Z+kt0BxlqzEzExpMTMTHWJQut+7H+NWPC8ftKlAAAAAAAAAAB6x0m1q1jttMRHm6zZsEY6VpXsiP1nrKm3Bs/Fe2SeynKPOf6X8AAAAAAAAAAAAAAAAA85KRaJrMaxMTEx4OT2vBOLJak9J5T3x0l1yn9INn1iuWOnq28ukgowAAAAAAAAZNnx8d6V960R8wdJurDwYaR1tHHPnLcREJAAAAAAAAAAAAAAAAAYdqw/aUvT3omPj0ZgHGIbW88XBnyR0meKPjzaoAAAAAADe3LTiz1/wCYtb5afVorX0er/kvPdWPnIL6EgAAAAAIASAAAAAAAAAAADn/SCmmSlverp8YlVrz0ir6uOfG0fJRgAAAAAALj0d9rJ5R+6AF6ACEgCEgCEgAAAAAAASAAAAAKn0h/10/N9FCAAAAAP//Z',
  },
  banner: {
    type: String,
    default:
      'data:image/jpeg;base64,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',
  },
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
