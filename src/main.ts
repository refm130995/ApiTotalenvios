import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression'; /* 
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api2');
  app.enableCors();
  app.use(compression());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  /* const options = new DocumentBuilder()
    .setTitle('API SALON')
    .setDescription('Esta es una API dedicada a la aplicacion mobile de barberias')
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup('', app, document);
 */
  await app.listen(8500);
}
bootstrap();
