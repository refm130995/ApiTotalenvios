import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';import * as compression from 'compression'; /* 
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api2');
  app.enableCors();
  app.use(compression());
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
