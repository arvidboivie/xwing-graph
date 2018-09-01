import { ObjectType, Field, Int } from "type-graphql";
import { ShipAbility } from "./shipability.type";

@ObjectType()
export class Pilot {

    @Field(type => String)
    name: string;

    @Field(type => String, { nullable: true })
    caption: string;

    @Field(type => Int)
    initiative: number;

    @Field(type => Int)
    limited: number;

    @Field(type => Int)
    cost: number;

    @Field(type => String)
    xws: string;

    @Field(type => String, { nullable: true })
    text: string;

    @Field(type => String, { nullable: true })
    ability: string;

    @Field(type => String, { nullable: true })
    image: string;

    @Field(type => ShipAbility, { nullable: true })
    shipAbility: ShipAbility;
}