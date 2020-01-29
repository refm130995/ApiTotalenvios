import { Controller, Post, Body, Delete, Query, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImagesDto } from 'src/schemas/images.schema';

@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @Post()
  async uploadImage(@Body() body: CreateImagesDto) {
    return await this.imageService.Insert(body);
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
