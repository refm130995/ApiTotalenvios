import * as mongoose from 'mongoose';
import {
  Document
} from 'mongoose';


export const BillingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tax: {
    type: Number
  }
});


export interface Billing extends Document {
  readonly name: string;
  readonly tax: string;
}
export const TaxSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tax: {
    type: Number
  }
});


export interface Tax extends Document {
  readonly name: string;
  readonly tax: string;
}

