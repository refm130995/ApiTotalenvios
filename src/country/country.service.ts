import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Country,
  Cities,
  CountryDTO,
  FindCityDTO,
  CityDto,
} from '../schemas/country.schemas';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel('Country') public readonly countryModel: Model<Country>,
    @InjectModel('City') public readonly citiesModel: Model<Cities>,
  ) {}

  async Update(country: any) {
    let result = await this.countryModel.findByIdAndUpdate(
      country._id,
      country,
    );
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'El metodo de pago que intenta actualizar no existe.',
        },
        409,
      );
    }
  }

  async Add(country: CountryDTO) {
    console.log(country);
    if (
      await this.countryModel.exists({
        name: country.name,
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Esta estado  ya existe!',
        },
        409,
      );
    } else {
      let result = await new this.countryModel(country).save();
      return result;
    }
  }

  async Delete(country: any) {
    let result = await this.countryModel.findByIdAndRemove({
      _id: country._id,
    });
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'El estado que desea eliminar no existe.',
        },
        409,
      );
    }
  }

  async DeleteCity(data: any) {
    let result = await this.citiesModel.findByIdAndRemove({
      _id: data._id,
    });
    if (result) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'El ciudad que desea eliminar no existe.',
        },
        409,
      );
    }
  }

  async FindAll() {
    let result = await this.countryModel.find();
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

  async FindAllCities() {
    let result = await this.countryModel.find();
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

  async AddCities(data: CityDto) {
    console.log(data);
    if (
      await this.citiesModel.exists({
        city: data.city,
      })
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Esta ciudad ya existe!',
        },
        409,
      );
    } else {
      let result = await new this.citiesModel(data).save();
      return result;
    }
  }

  async FindByState(data: FindCityDTO) {
    console.log(data);

    let result = await this.citiesModel.find({
      state: data.state,
    });
    if (result.length > 0) {
      return result;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Este estado no se encuentra registrado!',
        },
        409,
      );
    }
  }
}
