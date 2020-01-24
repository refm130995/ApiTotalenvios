import * as mongoose from 'mongoose';
import {
  Document
} from 'mongoose';


export const CountrySchema = new mongoose.Schema({
  name: {
    type: String
  },
  region: {
    type: String
  }
});


export const CitySchema = new mongoose.Schema({
    state: {
      type: String
    },
    city: {
      type: String
    }
  });

export interface Country extends Document {
  readonly name: string;
  readonly region: string;
}

export interface CountryDTO {
  readonly name: string;
  readonly region: string;
}

export interface FindCityDTO {
  readonly state: string;
}
export interface CityDto {
  readonly state: string;
  readonly city: string;
}

export interface Cities extends Document {
  readonly state: string;//nombre del estado
  readonly city: string;//nombre de la ciudad
}
 