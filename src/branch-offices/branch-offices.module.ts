import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchOfficesController } from './branch-offices.controller';
import { BranchOfficesService } from './branch-offices.service';
import { BranchOfficesSchema } from '../schemas/branch-offices.schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'BranchOffices', schema: BranchOfficesSchema }])],
    controllers: [BranchOfficesController],
    providers: [BranchOfficesService]
})
export class BranchOfficesModule {}
