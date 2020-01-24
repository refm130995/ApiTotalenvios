import { Controller, Body, Post, Get } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDTO, FindCityDTO, CityDto } from '../schemas/country.schemas';

@Controller('country')
export class CountryController {
    constructor(private readonly appService: CountryService) {}
    @Post('create')
    Create(@Body() Country: CountryDTO) {
      return this.appService.Add(Country);
    }
    
    @Post('delete')
    Delete(@Body() Country: any) {
      return this.appService.Delete(Country);
    }

    @Post('deleteCity')
    DeleteCity(@Body() data: any) {
      return this.appService.DeleteCity(data);
    }

    @Post('update')
    Update(@Body() Country: CountryDTO) {
      return this.appService.Update(Country);
    }
    @Get('find')
    FindByState(@Body() state: FindCityDTO) {
      return this.appService.FindByState(state);
    }
    @Post('city')
    CreateCity(@Body() city: CityDto) {
      return this.appService.AddCities(city);
    }
    
    @Get()
    All(){
        return this.appService.FindAll();
    }
}
