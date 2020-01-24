import * as mongoose from 'mongoose';
import {
  Document
} from 'mongoose';


export const TransportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tax: {
    type: Number
  }
});


export interface Transport extends Document {
  readonly name: string;
  readonly tax: string;
}

