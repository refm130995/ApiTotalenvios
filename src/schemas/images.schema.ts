import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ImagesSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  type: String,
});

export interface Images extends Document {
  readonly image: string;
  readonly type: string;
}

export class CreateImagesDto {
  readonly image: string;
  readonly type: string;
}
