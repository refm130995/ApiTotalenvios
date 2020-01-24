        import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
        import { Services, CreateServiceDto, DeleteServiceDto } from '../schemas/services.schemas';
        import { Model } from 'mongoose';
        import { InjectModel } from '@nestjs/mongoose';

        @Injectable()
        export class ServicesService {
            
            constructor(
                @InjectModel('Services') public readonly servicesModel: Model < Services >
            ) {}


            async insert(service: CreateServiceDto) {
                if (await this.servicesModel.exists({
                        name: service.name
                    })) {
                    throw new HttpException({
                        status: HttpStatus.EXIST,
                        error: 'Este servicio ya existe!',
                    }, 409);
                } else {
                    let result = await new this.servicesModel(service).save();
                    return result
                }
            }

            async insertServices(service: CreateServiceDto, id: string) {
                if (await this.servicesModel.exists({
                        name: service.name
                    })) {
                    throw new HttpException({
                        status: HttpStatus.EXIST,
                        error: 'Este servicio ya existe!',
                    }, 409);
                } else {
                    let result = await new this.servicesModel(service).save();
                    return result
                }
            }

            async updateService(service: any) {
               if (await this.servicesModel.exists(service)) {
                let result = await this.servicesModel.findByIdAndUpdate(service.id, service);
                return result
                } else {
                    throw new HttpException({
                        status: HttpStatus.EXIST,
                        error: 'Este servicio no existe!',
                    }, 409);
                }
            }

            async find() {
                let result = await this.servicesModel.find();
                if (result) {
                    return result;
                } else {
                    throw new HttpException({
                        status: HttpStatus.EXIST,
                        error: 'No existen servicios.',
                    }, 409);
                }
            }

            async delete(service: DeleteServiceDto) {
                let result = await this.servicesModel.findByIdAndRemove({
                    _id: service.id
                });
                if (result) {
                    return result;
                } else {
                    throw new HttpException({
                        status: HttpStatus.EXIST,
                        error: 'El servicio que desea eliminar no existe.',
                    }, 409);
                }
            }
        }
