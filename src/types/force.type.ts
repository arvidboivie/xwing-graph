import { ICharge } from "../interfaces/charge.interface";
import { ObjectType } from "type-graphql";

@ObjectType({ implements: ICharge })
export class Force implements ICharge {
    value: number;
    recovers: number;
}