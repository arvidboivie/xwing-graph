import { Field, Int, InterfaceType } from "type-graphql";

@InterfaceType()
export abstract class ICharge {
  @Field(type => Int)
  value: number;

  @Field(type => Int)
  recovers: number;
}
