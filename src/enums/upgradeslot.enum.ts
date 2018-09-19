import { registerEnumType } from "type-graphql";

export enum UpgradeSlot {
  ASTROMECH = "Astromech",
  CANNON = "Cannon",
  CONFIGURATION = "Configuration",
  CREW = "Crew",
  DEVICE = "Device",
  FORCE_POWER = "Force Power",
  GUNNER = "Gunner",
  ILLICIT = "Illicit",
  MISSILE = "Missile",
  MODIFICATION = "Modification",
  SENSOR = "Sensor",
  TALENT = "Talent",
  TECH = "Tech",
  TITLE = "Title",
  TORPEDO = "Torpedo",
  TURRET = "Turret"
}

registerEnumType(UpgradeSlot, {
  name: "UpgradeSlot",
  description: "Upgrade slots"
});
