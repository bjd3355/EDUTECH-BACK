import { Module } from '@nestjs/common';
import { QcmController } from './qcm.controller';
import { QcmService } from './qcm.service';

@Module({
  controllers: [QcmController],
  providers: [QcmService]
})
export class QcmModule {}
