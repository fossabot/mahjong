import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3333;

  await app.listen(port);
}

bootstrap().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
});
