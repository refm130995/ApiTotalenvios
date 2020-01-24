import {
    Injectable,
    NotFoundException,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import {
    InjectModel
} from '@nestjs/mongoose';
import {
    Model
} from 'mongoose';
import {
    BranchOffices,
    CreateBranchDto,
    AddServicestoBranchDto
} from '../schemas/branch-offices.schemas';

@Injectable()
export class BranchOfficesService {

    constructor(
        @InjectModel('BranchOffices') public readonly branchOfficesModel: Model < BranchOffices >
    ) {}


    async insert(branch: CreateBranchDto) {
        if (await this.branchOfficesModel.exists({
                email: branch.email
            })) {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El correo se encuentra en uso',
            }, 409);
        } else {
            let result = await new this.branchOfficesModel(branch).save();
            return result
        }
    }

    async find(branch: CreateBranchDto) {
        let result = await this.branchOfficesModel.findOne({
            email: branch.email
        });
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'La sucursal no existe.',
            }, 409);
        }
    }
    async findAll() {
        let result = await this.branchOfficesModel.find();
        if (result.length > 0) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'No existen sucursales.',
            }, 409);
        }
    }

    async put(branch: CreateBranchDto) {
        let result = await this.branchOfficesModel.findOne({
            email: branch.email
        });
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El usuario no existe.',
            }, 409);
        }
    }

    
    async Updateservices(services: any) {
        
        let result = await this.branchOfficesModel.findByIdAndUpdate(services._id, services)
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El comercio que intenta actualizar no existe.',
            }, 409);
        }
    }

    async UpdateBranch(BranchOffice: any) {
        let result = await this.branchOfficesModel.findByIdAndUpdate(BranchOffice.id, BranchOffice)
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El comercio que intenta actualizar no existe.',
            }, 409);
        }
    }
}