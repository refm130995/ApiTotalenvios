import { Controller, Body, Post } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQueueDTO } from 'src/schemas/queue.schemas';

@Controller('quotes')
export class QuotesController {
    constructor(private quotesService: QuotesService
        ) {}
      
        @Post('inLine')
        async inLine(@Body() queue: CreateQueueDTO) {
          return await this.quotesService.inQueue(queue);
        }
      }