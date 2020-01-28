import { sign } from 'jsonwebtoken';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { RegisterDTO, LoginDTO, Payload, User } from 'src/schemas/auth.schemas';
import { jwtConstants } from 'src/utilities/constant.jwt';
@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async signPayload(payload: Payload) {
    return sign(payload, jwtConstants.secret, { expiresIn: '12h' });
  }

  async validateUser(payload: Payload) {
    return await this.findByPayload(payload);
  }

  async create(userDTO: RegisterDTO) {
    const { email } = userDTO;
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdUser = new this.userModel(userDTO);
    await createdUser.save();
    return this.sanitizeUser(createdUser);
  }

  async find() {
    return await this.userModel.find();
  }

  async findByLogin(userDTO: LoginDTO) {
    const { email, password } = userDTO;
    const user = await this.userModel
      .findOne({ email })
      .select('email password seller created address');
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      return this.sanitizeUser(user);
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  async findByPayload(payload: Payload) {
    return await this.userModel.findOne(payload);
  }

  async findById(user: any) {
    const result = await this.userModel.findById({ _id: user._id });
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.EXIST,
          error: 'Este usuario no existe!',
        },
        409,
      );
    }
  }

  sanitizeUser(user: any) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
    // return user.depopulate('password');
  }

  async update(user: any) {
    if (await this.userModel.exists({ _id: user._id })) {
      await this.userModel.findByIdAndUpdate(user._id, user);
      return await this.userModel.findById({ _id: user._id });
    } else {
      throw new HttpException(
        {
          status: HttpStatus.EXIST,
          error: 'Este usuario no existe!',
        },
        409,
      );
    }
  }
}
