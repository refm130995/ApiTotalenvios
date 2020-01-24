import * as mongoose from 'mongoose';
import {
  Document
} from 'mongoose';
export const QueouSchema = new mongoose.Schema({
    date:{ type: Date, required: true},
    hours: {type: [], required: true},
    status: {type: String, required: true, default: 'for attending'},
    userId: {type: [], required: true},
    service: {type: [], required: true},
    branchId: {type: [], required: true}
  });

export interface CreateQueueDTO {
   readonly userId: string;
   readonly branchId: string;
   readonly serviceId: string;
   readonly hours: string;
   readonly date: string;
  }
  export interface Queou extends Document{
    readonly date: string;
    readonly hours: string;
    readonly status: string;
  }