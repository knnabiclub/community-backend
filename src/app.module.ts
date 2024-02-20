import { Module } from '@nestjs/common';

import { HealthController } from './core/health/health.controller';
import { EnvironmentModule } from './environment/environment';

@Module({
  imports: [EnvironmentModule],
  providers: [],
  controllers: [HealthController]
})
export class AppModule {}
