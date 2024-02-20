import { ConfigModule, registerAs } from '@nestjs/config';

import { AppConfig } from './types/app-config';

const environment = registerAs('env', ():AppConfig => {
  return {
    port: Number(process.env.PORT) || 3000
  };
});

export const EnvironmentModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '.env',
  load: [environment]
});
