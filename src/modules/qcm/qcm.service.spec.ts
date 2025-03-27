import { Test, TestingModule } from '@nestjs/testing';
import { QcmService } from './qcm.service';

describe('QcmService', () => {
  let service: QcmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QcmService],
    }).compile();

    service = module.get<QcmService>(QcmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
