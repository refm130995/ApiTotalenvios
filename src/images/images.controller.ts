import {
  Controller,
  Post,
  Body,
  Delete,
  Query,
  Get,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { CreateImagesDto } from 'src/schemas/images.schema';
import multer from 'multer';
@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @Post()
  async uploadImage(@Body() body: CreateImagesDto) {
    return await this.imageService.Insert(body);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('image'))
  async upload(@UploadedFile() file, @Res() res) {
    try {
      console.log(file);
      res.status(200).send(file);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  @Delete()
  async deleteImage(@Query('id') id: string) {
    return await this.imageService.Delete(id);
  }

  @Get('/slider')
  async findAllSlider() {
    return await this.imageService.FindSlider();
  }

  @Get('/promotion')
  async findAllPromotions() {
    return await this.imageService.findPromotions();
  }
}
