import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QueouSchema } from 'src/schemas/queue.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Queou', schema: QueouSchema }])],
  providers: [QuotesService],
  controllers: [QuotesController]
})
export class QuotesModule {}
