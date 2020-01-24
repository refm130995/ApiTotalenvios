import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { CreateServiceDto, DeleteServiceDto } from "../schemas/services.schemas";

@ApiUseTags('Services Routes')
@Controller('services')
export class ServicesController {
    constructor(private readonly appService: ServicesService) {}
    @Post()
    Create(@Body() CreateServiceDto: CreateServiceDto) {
      return this.appService.insert(CreateServiceDto);
    }
    
    @Get()
    FindAll() {
      return this.appService.find();
    }

    @Post('delete')
    DeleteById(@Body() DeleteServiceDto: DeleteServiceDto){
        return this.appService.delete(DeleteServiceDto);
    }

    @Post('update')
    UpdateById(@Body() Service: any){
        return this.appService.updateService(Service);
    }
}
