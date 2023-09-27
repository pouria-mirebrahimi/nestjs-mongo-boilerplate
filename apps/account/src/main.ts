import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AccountModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
