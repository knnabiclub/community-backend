import { Injectable } from '@nestjs/common';

import { Targets } from './types/targets.enum';

@Injectable()
export class SocialsService {
  public redirect(from:string, to:Targets):string {
    console.log(`Redirecting from '${from}' to '${to}'`);

    return to;
  }
}
