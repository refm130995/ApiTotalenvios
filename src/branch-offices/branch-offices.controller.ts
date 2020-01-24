import { Controller, Req, Post, Body, Get } from '@nestjs/common';
import { BranchOfficesService } from './branch-offices.service';
import { CreateBranchDto, AddServicestoBranchDto } from '../schemas/branch-offices.schemas';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Branches-Offiices Routes')
@Controller('branch-offices')
export class BranchOfficesController {
    constructor(private readonly appService: BranchOfficesService) {}
    @Post()
    create(@Body() createBranchDto: CreateBranchDto) {
      return this.appService.insert(createBranchDto);
    }
    
    @Get('id')
    FindById(@Body() createBranchDto: CreateBranchDto) {
      return this.appService.find(createBranchDto);
    }

    @Get()
    FindAll() {
      return this.appService.findAll();
    }
    
    @Post('add')
    UpdateServices(@Body() addServicestoBranchDto: any) {
      return this.appService.Updateservices(addServicestoBranchDto);
    }

    @Post('update')
    UpdateBranch(@Body() BranchOffice: any) {
      return this.appService.Updateservices(BranchOffice);
    }
}
