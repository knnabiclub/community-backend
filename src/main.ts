import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';

class Main {
  private static PORT = process.env.PORT || 3000;

  public static async main() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());

    const validationPipe = new ValidationPipe({
      whitelist: true,
      transform: true
    });
    app.useGlobalPipes(validationPipe);

    await app.listen(this.PORT);
  }
}

Main.main();
