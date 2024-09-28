import { Module } from '@nestjs/common';
import { CoffiesService } from './coffies.service';
import { CoffiesController } from './coffies.controller';

@Module({
  controllers: [CoffiesController],
  providers: [CoffiesService],
})
export class CoffiesModule {}
