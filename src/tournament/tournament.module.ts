import { TournamentResolver } from './tournament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Module } from '@nestjs/common';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  controllers: [TournamentController],
  providers: [TournamentService, TournamentResolver]
})
export class TournamentModule {}
