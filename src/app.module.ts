import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BranchOfficesModule } from './branch-offices/branch-offices.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SearchModule } from './search/search.module';
import { QuotesModule } from './quotes/quotes.module';
import { BillingModule } from './billing/billing.module';
import { CalculateModule } from './calculate/calculate.module';
import { TransportModule } from './transport/transport.module';
import { CountryModule } from './country/country.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    /* MongooseModule.forRoot(
      'mongodb+srv://baldo:7ATep5KlM292X9so@barbers-allkf.mongodb.net/Barbers?retryWrites=true&w=majority',
    ), */
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/totalenvios'),
    BranchOfficesModule,
    AuthModule,
    ServicesModule,
    ProfilesModule,
    SearchModule,
    QuotesModule,
    BillingModule,
    CalculateModule,
    TransportModule,
    CountryModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
