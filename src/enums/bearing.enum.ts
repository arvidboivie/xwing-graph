import { registerEnumType } from "type-graphql";

export enum Bearing {
  STRAIGHT = "F",
  RIGHT_BANK = "N",
  LEFT_BANK = "B",
  RIGHT_TURN = "Y",
  LEFT_TURN = "T",
  KOIOGRAN_TURN = "K",
  RIGHT_SEGNORS_LOOP = "P",
  LEFT_SEGNORS_LOOP = "L",
  RIGHT_TALLON_ROLL = "R",
  LEFT_TALLON_ROLL = "E",
  STATIONARY = "O",
  REVERSE_STRAIGHT = "S",
  RIGHT_REVERSE_BANK = "D",
  LEFT_REVERSE_BANK = "A"
}

registerEnumType(Bearing, {
  name: "Bearing",
  description: "Available bearings"
});
