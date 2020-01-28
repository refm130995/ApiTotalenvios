import {
    Injectable, HttpException, HttpStatus
} from '@nestjs/common';
import {
    InjectModel
} from '@nestjs/mongoose';
import {
    SearchByNameDto,
    SearchByService
} from '../schemas/search.schemas';
import {
    Model
} from 'mongoose';
import {
    BranchOffices
} from '../schemas/branch-offices.schemas';

@Injectable()
export class SearchService {
    branchOffices: any = [];
    constructor(
        @InjectModel('BranchOffices') public readonly branchOfficesModel: Model < BranchOffices >
    ) {}


    async searchName(search: SearchByNameDto) {
     this.branchOffices = this.branchOfficesModel.find({name: { '$regex' : search.searchText, '$options' : 'i' }})
        if (this.branchOffices) {
            return this.branchOffices;
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Sin resultados',
            }, 409);
        }

    }


    async searchService(search: SearchByService) {
        this.branchOffices = await this.branchOfficesModel.find().exec();
        let result = this.branchOffices.filter( item =>
            item.services.indexOf(search.serviceId) >= 0
        )
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'Sin resultados',
            }, 409);
        }
    }

}