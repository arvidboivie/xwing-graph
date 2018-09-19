import { ObjectType, Field, Int } from "type-graphql";
import { UpgradeSide } from "./upgradeside.type";
import { Type } from "class-transformer";

@ObjectType({ description: "Upgrade type" })
export class Upgrade {
  @Field(type => String)
  name: string;

  @Field(type => Int)
  limited: number;

  @Field(type => String)
  xws: string;

  @Field(type => [UpgradeSide])
  @Type(() => UpgradeSide)
  sides: UpgradeSide[];
}
