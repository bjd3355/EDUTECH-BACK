import { Test, TestingModule } from '@nestjs/testing';
import { QcmController } from './qcm.controller';

describe('QcmController', () => {
  let controller: QcmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QcmController],
    }).compile();

    controller = module.get<QcmController>(QcmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
