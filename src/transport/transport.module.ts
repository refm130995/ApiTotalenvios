import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportSchema } from './../schemas/transport.schemas';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Transport', schema: TransportSchema }])],
  controllers: [TransportController],
  providers: [TransportService]
})
export class TransportModule {}
