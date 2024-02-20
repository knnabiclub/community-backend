import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { SocialsService } from './socials.service';
import { Targets } from './types/targets.enum';

@Controller('/')
export class SocialsController {
  constructor(private readonly service:SocialsService) {}

  @Get('/discord')
  public discord(@Res() res:Response, @Query('source') source:string) {
    const target = this.service.redirect(source, Targets.DISCORD);

    res.redirect(target);
  }

  @Get('/instagram')
  public instagram(@Res() res:Response, @Query('source') source:string) {
    const target = this.service.redirect(source, Targets.INSTAGRAM);

    res.redirect(target);
  }

  @Get('/github')
  public github(@Res() res:Response, @Query('source') source:string) {
    const target = this.service.redirect(source, Targets.GITHUB);

    res.redirect(target);
  }
}
