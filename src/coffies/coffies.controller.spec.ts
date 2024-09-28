import { Test, TestingModule } from '@nestjs/testing';
import { CoffiesController } from './coffies.controller';
import { CoffiesService } from './coffies.service';

describe('CoffiesController', () => {
  let controller: CoffiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffiesController],
      providers: [CoffiesService],
    }).compile();

    controller = module.get<CoffiesController>(CoffiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
