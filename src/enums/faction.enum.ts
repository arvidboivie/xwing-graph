import { registerEnumType } from "type-graphql";

export enum Faction {
    REBEL = "Rebel Alliance",
    SCUM = "Scum and Villainy",
    EMPIRE = "Galactic Empire",
    RESISTANCE = "Resistance",
    FIRST_ORDER = "First Order"
}

registerEnumType(Faction, {
    name: "Faction",
    description: "All factions available in the game",
});