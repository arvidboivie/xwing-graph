import { Resolver, Query } from "type-graphql";
import { plainToClass } from "class-transformer";
import { Upgrade } from "../types/upgrade.type";

@Resolver(of => Upgrade)
export class UpgradeResolver {
  readonly upgradeList: Upgrade[] = plainToClass(
    Upgrade,
    require("xwing-data-module").upgrades
  );

  @Query(returns => [Upgrade], { description: "Get all the upgrades" })
  upgrades(): Upgrade[] {
    return this.upgradeList;
  }
}
