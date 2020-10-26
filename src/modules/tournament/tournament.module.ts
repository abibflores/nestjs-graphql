import { OptaModule } from './../opta/opta.module';
import { TournamentResolver } from './tournament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './tournament.entity';
import { HttpModule, Module } from '@nestjs/common';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';
import { OptaService } from '../opta/opta.service';
import { ConfigService } from 'src/config/config.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament]), OptaModule, HttpModule],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentResolver, OptaService, ConfigService]
})
export class TournamentModule {}
