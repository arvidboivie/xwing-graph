import { Ship } from '../types/ship.type';
import { Resolver, Query } from "type-graphql";

@Resolver(of => Ship)
export class ShipResolver {
    readonly pilots: Ship[] = require('xwing-data-module').pilots;

    @Query(returns => [Ship], { description: "Get all the ships" })
    ships(): Ship[] {
        return this.pilots;
    }

    // @FieldResolver()
    // actions(@Root() ship: Ship): Action[] {
    //     return plainToClass(Action, ship.actions);
    // }
}