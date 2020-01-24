import * as mongoose from 'mongoose';
import {
  Document
} from 'mongoose';


export const ServicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  aprox: {
     type: String,
     required: true
  },
  image: {
    type: String,
    required: true
 }
});


export interface Services extends Document {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly price: string;
  readonly aprox: string;
}

export class CreateServiceDto {
  readonly name: string;
  readonly description: string;
  readonly image: string;
  readonly price: string;
  readonly aprox: string;
}

export class DeleteServiceDto {
  readonly id: string;
}
