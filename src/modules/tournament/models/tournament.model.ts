import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tournament {
  @Field({ description: "Tournament Id" })
  id: number;

  @Field({ description: "Tournament Name" })
  name: string;
}