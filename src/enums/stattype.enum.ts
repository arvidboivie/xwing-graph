import { registerEnumType } from "type-graphql";

export enum StatType {
  ATTACK = "attack",
  AGILITY = "agility",
  HULL = "hull",
  SHIELDS = "shields"
}

registerEnumType(StatType, {
  name: "StatType",
  description: "The different types of stats available"
});
