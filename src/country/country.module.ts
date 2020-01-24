import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { CountrySchema, CitySchema } from 'src/schemas/country.schemas';

@Module({
      imports: [MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }, { name: 'City', schema: CitySchema }])],
    controllers: [CountryController],
    providers: [CountryService]
})
export class CountryModule {}
