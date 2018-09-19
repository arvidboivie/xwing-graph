import { ObjectType, Field } from "type-graphql";
import { UpgradeSlot } from "../enums/upgradeslot.enum";

@ObjectType({ description: "Upgrade type" })
export class Upgrade {
    @Field(type => String)
    name: string;

    @Field(type => UpgradeSlot)
    slot: UpgradeSlot;
}