import { ObjectType, Field, Int } from "type-graphql";
import { ArcType } from "../enums/arctype.enum";

@ObjectType({ description: "Upgrade type" })
export class SpecialAttack {
  @Field(type => ArcType)
  arc: ArcType;

  @Field(type => Int)
  value: number;

  @Field(type => Int)
  minrange: number;

  @Field(type => Int)
  maxrange: number;
}
