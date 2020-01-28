import { Controller, Post, Body, Delete, Query, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImagesDto } from 'src/schemas/images.schema';

@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImagesService) {}

  @Post()
  uploadImage(@Body() body: CreateImagesDto) {
    return this.imageService.Insert(body);
  }

  @Delete()
  deleteImage(@Query('id') id: string) {
    return this.imageService.Delete(id);
  }

  @Get('/slider')
  findAllSlider() {
    return this.imageService.FindSlider();
  }

  @Get('/promotion')
  findAllPromotions() {
    return this.imageService.findPromotions();
  }
}
