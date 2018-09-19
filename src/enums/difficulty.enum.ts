import { registerEnumType } from "type-graphql";

export enum Difficulty {
  BLUE = "Blue",
  WHITE = "White",
  RED = "Red"
}

registerEnumType(Difficulty, {
  name: "Difficulty",
  description: "Maneuver/action difficulties"
});
