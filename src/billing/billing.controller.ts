import { Controller, Body, Post, Get } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
    constructor(private readonly appService: BillingService) {}
    @Post('create')
    Create(@Body() Billing: any) {
      return this.appService.Add(Billing);
    }
    
    @Post('delete')
    Delete(@Body() Billing: any) {
      return this.appService.Delete(Billing);
    }

    @Post('update')
    Update(@Body() Billing: any) {
      return this.appService.Update(Billing);
    }
    @Post('create/tax')
    CreateTax(@Body() Billing: any) {
      return this.appService.AddTax(Billing);
    }

    @Post('update/tax')
    UpdateTax(@Body() Billing: any) {
      return this.appService.UpdateTax(Billing);
    }
    @Get('tax')
    AllTax(){
        return this.appService.FindAllTax();
    }

    @Get()
    All(){
        return this.appService.FindAll();
    }
}
