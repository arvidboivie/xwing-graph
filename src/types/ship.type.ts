import { ObjectType, Field, Arg } from "type-graphql";
import { Faction } from "../enums/faction.enum";
import { Action } from "./action.type";
import { plainToClass } from "class-transformer";
import { Size } from "../enums/size.enum";
import { Pilot } from "./pilot.type";

@ObjectType({ description: "Ship type" })
export class Ship {
  @Field()
  name: string;

  @Field(type => Size)
  size: Size;

  @Field(type => Faction)
  faction: Faction;

  @Field(type => [String])
  dial: string[];

  actions: any[];

  @Field(type => [Pilot])
  pilots: Pilot[];

  @Field(type => [Action], { nullable: true })
  availableActions(): Action[] {
    if (this.actions) {
      const realActions = plainToClass(Action, this.actions);
        
      return realActions;
    } else {
      return [];
    }
  };

  // @Field(type => [Action], { nullable: true })
  // actions: Action[];

  // @Field(type => String, { nullable: true, deprecationReason: "Use `description` field instead" })
  // get specification(): string | undefined {
  //   return this.description;
  // }

  // @Field({ nullable: true, description: "The recipe description with preparation info" })
  // description?: string;

  // @Field(type => [Int])
  // ratings: number[];

  // @Field()
  // creationDate: Date;

  // @Field(type => Int)
  // ratingsCount: number;

  // @Field(type => Float, { nullable: true })
  // get averageRating(): number | null {
  //   const ratingsCount = this.ratings.length;
  //   if (ratingsCount === 0) {
  //     return null;
  //   }
  //   const ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
  //   return ratingsSum / ratingsCount;
  // }
}