import { ObjectType, Field } from "type-graphql";
import { Difficulty } from "../enums/difficulty.enum";
import { ActionEnum } from "../enums/action.enum";
import { Type } from "class-transformer";

@ObjectType()
export class Action {
    
    @Field(type => Difficulty)
    difficulty: Difficulty;
    
    @Field(type => ActionEnum)
    type: ActionEnum;

    @Type(() => Action)
    @Field(type => Action, {nullable: true})
    linked?: Action;
}