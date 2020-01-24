import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ServicesSchema } from '../schemas/services.schemas';
import { ServicesService } from './services.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Services', schema: ServicesSchema }])],
    controllers: [ServicesController],
    providers: [ServicesService]
})
export class ServicesModule {}
