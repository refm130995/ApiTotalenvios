import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transport } from './../schemas/transport.schemas';

@Injectable()
export class TransportService {
  constructor(
    @InjectModel('Transport') public readonly transportModel: Model<Transport>,
  ) {}

  async Update(transport: any) {
    let result = await this.transportModel.findByIdAndUpdate(
      transport._id,
      transport,
    );
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'El metodo de transporte que intenta actualizar no existe.',
        },
        409,
      );
    }
  }

  async Add(transport: any) {
    if (
      await this.transportModel.exists({
        name: transport.name,
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Este metodo de pago ya existe!',
        },
        409,
      );
    } else {
      let result = await new this.transportModel(transport).save();
      return result;
    }
  }

  async Delete(transport: any) {
    let result = await this.transportModel.findByIdAndRemove({
      _id: transport._id,
    });
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'El metodo de pago que desea eliminar no existe.',
        },
        409,
      );
    }
  }

  async FindAll() {
    let result = await this.transportModel.find();
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'No existen metodos de pago.',
        },
        409,
      );
    }
  }
}
