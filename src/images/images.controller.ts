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
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { CreateImagesDto } from 'src/schemas/images.schema';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { pathToFileURL } from 'url';
import { join, extname } from 'path';
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
      res.status(200).send(file.filename);
    } catch (error) {
      console.log(error);
      res.status(500).send('Ha ocurrido un error');
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

  @Get('/files/:id')
  async findImage(@Param('id') id: string, @Res() res) {
    try {
      res.sendFile(id, { root: 'files' });
    } catch (error) {
      return error;
    }
  }
}
