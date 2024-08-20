import { Module } from '@nestjs/common';
import { MicrocreditsController } from './microcredits.controller';
import { MicrocreditsService } from './microcredits.service';
import { UserRepository } from '../users/repositories/user.repository';
import { MicrocreditRepository } from './repositories/microcredit.repository';
import { StrategiesModule } from './strategies/strategies.module';

@Module({
  imports: [StrategiesModule],
  controllers: [MicrocreditsController],
  providers: [
    MicrocreditsService,
    UserRepository,
    MicrocreditRepository,
  ],
})
export class MicrocreditsModule {}
