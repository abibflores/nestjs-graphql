import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TournamentModel {
  @Field({ description: "Tournament Id" })
  id: string;

  @Field({ description: "Tournament Name" })
  name: string;
}