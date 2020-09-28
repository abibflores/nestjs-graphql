import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  await app.listen(AppModule.port);
  Logger.log(`Server is runing in ${await app.getUrl()}`);
}
bootstrap();
