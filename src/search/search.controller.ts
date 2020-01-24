import { Controller, Post, Get, Body } from '@nestjs/common';
import { SearchByNameDto, SearchByService } from 'src/schemas/search.schemas';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private readonly appService: SearchService) {}
    
    @Get('byService')
    SearchByService(@Body() searchDto: SearchByService) {
      return this.appService.searchService(searchDto);
    }

    @Get('byName')
    SearchByName(@Body() searchDto: SearchByNameDto) {
      return this.appService.searchName(searchDto);
    }
}
