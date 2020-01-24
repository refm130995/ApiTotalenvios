import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Billing, Tax } from '../schemas/billing.schemas';

@Injectable()
export class BillingService {
    constructor(
        @InjectModel('Billing') public readonly billingModel: Model < Billing >,
        @InjectModel('Tax') public readonly TaxModel: Model < Tax >

    ) {}


    async Update(billing: any) {
        let result = await this.billingModel.findByIdAndUpdate(billing._id, billing)
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El metodo de pago que intenta actualizar no existe.',
            }, 409);
        }
    }

    async Add(billing: any) {
        if (await this.billingModel.exists({
                name: billing.name
            })) {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'Este metodo de pago ya existe!',
            }, 409);
        } else {
            let result = await new this.billingModel(billing).save();
            return result
        }
    }

    async Delete(billing: any) {
        let result = await this.billingModel.findByIdAndRemove({
            _id: billing._id
        });
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El metodo de pago que desea eliminar no existe.',
            }, 409);
        }
    }

    async FindAll() {
        let result = await this.billingModel.find();
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'No existen metodos de pago.',
            }, 409);
        }
    }

    async UpdateTax(Tax: any) {
        let result = await this.TaxModel.findByIdAndUpdate(Tax._id, Tax)
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'El metodo de pago que intenta actualizar no existe.',
            }, 409);
        }
    }

    async AddTax(Tax: any) {
        if (await this.TaxModel.exists({
                name: Tax.name
            })) {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'Este metodo de pago ya existe!',
            }, 409);
        } else {
            let result = await new this.TaxModel(Tax).save();
            return result
        }
    }
    async FindAllTax() {
        let result = await this.TaxModel.find();
        if (result) {
            return result;
        } else {
            throw new HttpException({
                status: HttpStatus.EXIST,
                error: 'No existen metodos de pago.',
            }, 409);
        }
    }
}