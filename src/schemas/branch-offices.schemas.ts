import * as mongoose from 'mongoose';
import {
    Document
} from 'mongoose';

export const BranchOfficesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    lat:{
        type: Number,
        required:true
    },
    lng:{
        type: Number,
        required:true
    },
    
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String,
        required: false,
    },
    number: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    services: {
        type: []
    },
    about: String,
    hours: { type: []},
    galeria: {
        type: []
    },
    reviews: {
        type: []
    },
    specialists:{
        type: []
    }
});


export interface BranchOffices extends Document {
    readonly email: string;
    readonly name: string;
    readonly profile: string;
    readonly number: string;
    readonly address: string;
    readonly description: string;
    readonly services: [];
    readonly about: String;
    readonly hours: [string];
    readonly galery: [string];
    readonly reviews: [ReviewDto];
}

export class CreateBranchDto {
    readonly email: string;
    readonly name: string;
    readonly number: string;
    readonly address: string;
    readonly services: [string];
    readonly galery: [string];
    readonly reviews: [ReviewDto]
    readonly lat: number;
    readonly lng: number;
}

export class ReviewDto {
    stars: number;
    create: Date;
    user: string;
    commentary: string;
}

export class AddServicestoBranchDto {
    readonly idBranchOffice: string;
    readonly idServices: any = [];
}

export class CreateSpecialistsDto{
    readonly name: string;
    readonly position: string;
    readonly profile: string;
}

BranchOfficesSchema.post('findOneAndUpdate', async function(doc, next: mongoose.HookNextFunction) {
    try {

       var result = await this.findOne();
      return next();
    } catch (err) {
      return next(err);
    }
  })