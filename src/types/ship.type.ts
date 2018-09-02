import { ObjectType, Field, Arg } from "type-graphql";
import { Faction } from "../enums/faction.enum";
import { Action } from "./action.type";
import { Type, Expose } from "class-transformer";
import { Size } from "../enums/size.enum";
import { Pilot } from "./pilot.type";
import { ShipType } from "../enums/shiptype.enum";
import { Stats } from "./stats.type";

@ObjectType({ description: "Ship type" })
export class Ship {

  // Doing a switcharoo on this and shiptype,
  // because the name field is automagically cast to enum when imported from data module,
  // and I couldn't figure out how to create enum from the string value.
  @Field(type => ShipType, { name: "shipType" })
  name: ShipType;

  // See comment on name
  @Field(type => String, { name: "name" })
  typeToString(): string {
    return this.name;
  }

  @Field(type => Size)
  size: Size;

  @Field(type => [Stats])
  stats: Stats[];

  @Field(type => Faction)
  faction: Faction;

  @Field(type => [String])
  dial: string[];

  @Field(type => [Action], { nullable: true })
  @Type(() => Action)
  actions: any[];

  @Field(type => [Pilot])
  @Type(() => Pilot)
  pilots: Pilot[];
}