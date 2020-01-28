import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO, Payload, RegisterDTO, User } from '../schemas/auth.schemas';
/*import { ApiUseTags, ApiModelProperty } from '@nestjs/swagger'*/ import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/* @ApiUseTags('Auth Routes') */
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    @InjectModel('User') private userModel: Model<User>,
  ) {}

  @Post('signIn')
  async login(@Body() userDTO: LoginDTO) {
    var user = await this.authService.findByLogin(userDTO);
    /*   const payload: Payload = {
      email: user.email
    };
    const token = await this.authService.signPayload(payload);
    user = await this.userModel.findOne({ email: userDTO.email });
    return { user, token }; */
  }

  @Post('signUp')
  async register(@Body() userDTO: RegisterDTO) {
    console.log(userDTO);

    const user = await this.authService.create(userDTO);
    const payload: Payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('update')
  async update(@Body() userDTO: any) {
    return this.authService.update(userDTO);
  }

  @Get('user')
  async getUser(@Body() User: any) {
    const user = await this.authService.findById(User);
    if (user) {
      return user;
    } else {
      throw new HttpException('El usuario no existe', HttpStatus.BAD_REQUEST);
    }
  }
}
