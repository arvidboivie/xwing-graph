import { Ship } from '../types/ship.type';
import { Resolver, Query } from "type-graphql";
import { plainToClass } from 'class-transformer';

@Resolver(of => Ship)
export class ShipResolver {
    readonly shipList: Ship[] = plainToClass(Ship,require('xwing-data-module').pilots);

    @Query(returns => [Ship], { description: "Get all the ships" })
    ships(): Ship[] {
        return this.shipList;
    }
}