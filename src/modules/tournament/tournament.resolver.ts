import { TournamentModel } from './models/tournament.model';
import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { TournamentService } from './tournament.service';

@Resolver(of => TournamentModel)
export class TournamentResolver {
  constructor(
    private tournamentService: TournamentService,
  ) {}

  @Query(returns => [TournamentModel])
  async tournaments(@Args('id', { type: () => Int }) id: number) {
    return await this.tournamentService.allTournaments();
  }

}