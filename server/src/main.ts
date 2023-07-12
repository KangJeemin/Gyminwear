import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NextServer } from 'next/dist/server/next';
// import { createServer} from 'http';
// import { NextServerFactory } from '@nestjs-next/core';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
