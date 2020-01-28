import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Images, CreateImagesDto } from '../schemas/images.schema';
@Injectable()
export class ImagesService {
  constructor(
    @InjectModel('Images') public readonly ImagesModel: Model<Images>,
  ) {}

  async Insert(body: CreateImagesDto) {
    try {
      return new this.ImagesModel(body).save();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'No se pudo guardar la imagen.',
        },
        400,
      );
    }
  }

  async Delete(id: string) {
    try {
      return await this.ImagesModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'No se pudo eliminar la imagen.',
        },
        400,
      );
    }
  }

  async FindSlider() {
    try {
      return await this.ImagesModel.find({ type: 'S' }).exec();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'No se pudo listar las imagenes.',
        },
        400,
      );
    }
  }

  async findPromotions() {
    try {
      return await this.ImagesModel.find({ type: 'P' }).exec();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'No se pudo listar las imagenes.',
        },
        400,
      );
    }
  }
}
