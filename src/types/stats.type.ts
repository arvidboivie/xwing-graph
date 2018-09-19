import { ObjectType, Field, Int } from "type-graphql";
import { ArcType } from "../enums/arctype.enum";
import { StatType } from "../enums/stattype.enum";

@ObjectType()
export class Stats {
  @Field(type => Int)
  value: number;

  @Field(type => StatType)
  type: StatType;

  @Field(type => ArcType, { nullable: true })
  arc?: ArcType;
}
