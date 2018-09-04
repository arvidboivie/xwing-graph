import { Field, Int, ObjectType } from "type-graphql";
import { Bearing } from "../enums/bearing.enum";
import { Difficulty } from "../enums/difficulty.enum";
import { getEnumValuesMap } from "../helpers/helpers";

@ObjectType({ description: "Maneuver" })
export class Maneuver {
    constructor(dialString: string) {
        this.speed = +dialString[0];
        this.bearing = dialString[1] as Bearing;
        
        if (dialString[2] === 'R') {
            this.difficulty = Difficulty.RED;
        } else if (dialString[2] === 'W') {
            this.difficulty = Difficulty.WHITE;
        } else {
            this.difficulty = Difficulty.BLUE;
        }
    }

    @Field(type => Int)
    speed: number;

    @Field(type => Bearing)
    bearing: Bearing;

    @Field(type => Difficulty)
    difficulty: Difficulty;
}