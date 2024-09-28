import { Test, TestingModule } from '@nestjs/testing';
import { CoffiesService } from './coffies.service';

describe('CoffiesService', () => {
  let service: CoffiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffiesService],
    }).compile();

    service = module.get<CoffiesService>(CoffiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
