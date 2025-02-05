import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicrocreditsModule } from './microcredits/microcredits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MicrocreditsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
