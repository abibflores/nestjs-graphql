import { Tournament } from './models/tournament.model';
import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { TournamentService } from './tournament.service';

@Resolver(of => Tournament)
export class TournamentResolver {
  constructor(
    private tournamentService: TournamentService,
  ) {}

  @Query(returns => Tournament)
  async tournament(@Args('id', { type: () => Int }) id: number) {
    return {id: 1233, name: "Liga"};
  }

}