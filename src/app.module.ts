import { Module } from '@nestjs/common';

import { HealthController } from './core/health/health.controller';
import { EnvironmentModule } from './environment/environment';
import { SocialsModule } from './modules/socials/socials.module';

@Module({
  imports: [EnvironmentModule, SocialsModule],
  providers: [],
  controllers: [HealthController]
})
export class AppModule {}
