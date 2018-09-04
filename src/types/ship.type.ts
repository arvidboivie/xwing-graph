import { ObjectType, Field } from "type-graphql";
import { Faction } from "../enums/faction.enum";
import { Action } from "./action.type";
import { Type } from "class-transformer";
import { Size } from "../enums/size.enum";
import { Pilot } from "./pilot.type";
import { ShipType } from "../enums/shiptype.enum";
import { Stats } from "./stats.type";
import { Maneuver } from "./maneuver.type";

@ObjectType({ description: "Ship type" })
export class Ship {

  @Field(type => String)
  name: string;

  @Field(type => ShipType)
  typeToString(): ShipType {
    return this.name as ShipType;
  }

  @Field(type => Size)
  size: Size;

  @Field(type => [Stats])
  stats: Stats[];

  @Field(type => Faction)
  faction: Faction;

  @Field(type => [String], { name: 'dialStrings' })
  dial: string[];

  @Field(type => [Maneuver])
  dialManeuvers(): Maneuver[] {
    let dialManeuvers: Maneuver[] = [];

    for (let dial of this.dial) {
      dialManeuvers.push(new Maneuver(dial));
    }

    return dialManeuvers;
  }

  @Field(type => [Action], { nullable: true })
  @Type(() => Action)
  actions: any[];

  @Field(type => [Pilot])
  @Type(() => Pilot)
  pilots: Pilot[];
}