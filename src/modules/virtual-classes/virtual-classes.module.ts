import { Module } from '@nestjs/common';
import { VirtualClassesController } from './virtual-classes.controller';
import { VirtualClassesService } from './virtual-classes.service';

@Module({
  controllers: [VirtualClassesController],
  providers: [VirtualClassesService]
})
export class VirtualClassesModule {}
