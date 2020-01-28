import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateQueueDTO, Queou } from '../schemas/queue.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
var moment = require('moment');

@Injectable()
export class QuotesService {
  constructor(@InjectModel('Queou') public readonly QueouModel: Model<Queou>) {}

  async inQueue(queue: CreateQueueDTO) {
    if (
      await this.QueouModel.exists({
        userId: queue.userId,
        branchId: queue.branchId,
        serviceId: queue.serviceId,
        hours: queue.hours,
        date: queue.date,
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Ya tiene una cita agendada para este horario y servicio!',
        },
        409,
      );
    } else {
      let result = await new this.QueouModel(queue).save();
      var diff = moment(queue.date, 'YYYY-MM-DD HH:mm:ss').diff(
        Date.now(),
        'ms',
      ); // Diff in days
      setTimeout(() => {
        //Mandar correo
        //Llamar al servicio con la cita
      }, diff);
      return result;
    }
  }
}
