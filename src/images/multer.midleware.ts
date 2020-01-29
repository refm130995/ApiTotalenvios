import * as multer from 'multer';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
export class MulterMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        const upload = multer({ dest: './uploads/' });
        /** Accept only one file, using the csv fieldname */
        return upload.single('csv');
        next();
      }
}