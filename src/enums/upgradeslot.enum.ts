import { registerEnumType } from "type-graphql";

export enum UpgradeSlot {
    ASTROMECH = "astromech",
    CANNON = "cannon",
    CONFIGURATION = "configuration",
    CREW = "crew",
    DEVICE = "device",
    FORCE_POWER = "force_power",
    GUNNER = "gunner",
    ILLICIT = "illicit",
    MISSILE = "missile",
    MODIFICATION = "modification",
    SENSOR = "sensor",
    TALENT = "talent",
    TECH = "tech",
    TITLE = "title",
    TORPEDO = "torpedo",
    TURRET= "turret"
}

registerEnumType(UpgradeSlot, {
    name: "UpgradeSlot",
    description: "Upgrade slots",
});