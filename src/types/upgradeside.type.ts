import { ObjectType, Field, Int } from "type-graphql";
import { UpgradeSlot } from "../enums/upgradeslot.enum";
import { Force } from "./force.type";
import { Charge } from "./charge.type";
import { Type } from "class-transformer";
import { Action } from "./action.type";
import { SpecialAttack } from "./specialattack.type";

@ObjectType({ description: "Upgrade type" })
export class UpgradeSide {
  @Field(type => String)
  title: string;

  @Field(type => UpgradeSlot)
  type: UpgradeSlot;

  @Field(type => String, { nullable: true })
  ability: string;

  @Field(type => [UpgradeSlot])
  slots: UpgradeSlot[];

  @Field(type => [Action], { nullable: true })
  @Type(() => Action)
  actions: Action[];

  @Field(type => Force, { nullable: true })
  @Type(() => Force)
  force: Force;

  @Field(type => Charge, { nullable: true })
  @Type(() => Charge)
  charges: Charge;

  @Field(type => SpecialAttack, { nullable: true })
  @Type(() => SpecialAttack)
  attack: SpecialAttack;
}
