import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesSchema } from 'src/schemas/images.schema';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { MulterModule } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Images', schema: ImagesSchema }]),
    MulterModule.register({
      dest: './files',
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          return cb(null, file.originalname);
        },
      }),
    }),
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
