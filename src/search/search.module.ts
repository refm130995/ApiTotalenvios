import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchOfficesSchema } from '../schemas/branch-offices.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BranchOffices', schema: BranchOfficesSchema }])],
  providers: [SearchService],
  controllers: [SearchController]
})
export class SearchModule {}
