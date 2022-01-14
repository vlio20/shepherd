import { Module } from '@nestjs/common';
import { FlowController } from './flow/controller/flow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { FlowEntity } from './flow/dao/flow/flow.entity';
import { FlowRepository } from './flow/dao/flow/flow.repository';
import { FlowApi } from './flow/api/flow.api';
import { FlowService } from './flow/service/flow.service';
import { AccountEntity } from './account/dao/account.entity';
import { AccountRepository } from './account/dao/account.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.get('db.host'),
      port: config.get('db.port'),
      username: config.get('db.username'),
      password: config.get('db.password'),
      database: config.get('db.database'),
      logging: config.get('db.logging'),
      synchronize: config.get('db.synchronize'),
      charset: 'utf8mb4_unicode_ci',
      entities: [FlowEntity, AccountEntity],
    }),
    TypeOrmModule.forFeature([FlowRepository, AccountRepository]),
  ],
  controllers: [FlowController],
  providers: [FlowApi, FlowService],
})
export class AppModule {}
