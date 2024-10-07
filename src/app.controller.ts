import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { AuthType } from './auth/authentication/enums/auth-type.enum';
import { Auth } from './auth/authentication/decorators/auth.decorator';

@Controller()
@Auth(AuthType.NONE)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }
}
