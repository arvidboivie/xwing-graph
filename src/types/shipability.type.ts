import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class ShipAbility {

    @Field(type => String)
    name: string;

    @Field(type => String)
    text: string;
}