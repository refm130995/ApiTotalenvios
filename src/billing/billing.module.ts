import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingSchema, TaxSchema } from 'src/schemas/billing.schemas';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
      imports: [MongooseModule.forFeature([{ name: 'Billing', schema: BillingSchema }, { name: 'Tax', schema: TaxSchema }])],
    controllers: [BillingController],
    providers: [BillingService]
})
export class BillingModule {}
