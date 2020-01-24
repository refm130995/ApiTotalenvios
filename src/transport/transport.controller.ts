import { Controller, Post, Get, Body } from '@nestjs/common';
import { TransportService } from './transport.service';
@Controller('transport')
export class TransportController {
    constructor(private readonly appService: TransportService) {}
    @Post('create')
    Create(@Body() Transport: any) {
      return this.appService.Add(Transport);
    }
    
    @Post('delete')
    Delete(@Body() Transport: any) {
      return this.appService.Delete(Transport);
    }

    @Post('update')
    Update(@Body() Transport: any) {
      return this.appService.Update(Transport);
    }

    @Get()
    All(){
        return this.appService.FindAll();
    }
}
