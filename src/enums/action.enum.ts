import { registerEnumType } from "type-graphql";

export enum ActionEnum {
    BARREL_ROLL = 'Barrel Roll',
    BOOST = 'Boost',
    CALCULATE = 'Calculate',
    CLOAK = 'Cloak',
    COORDINATE = 'Coordinate',
    EVADE = 'Evade',
    FOCUS = 'Focus',
    LOCK = 'Lock',
    JAM = 'Jam',
    RELOAD = 'Reload',
    REINFORCE = 'Reinforce',
    ROTATE = 'Rotate Arc',
    SLAM = 'SLAM',
}

registerEnumType(ActionEnum, {
    name: "ActionEnum",
    description: "All available actions",
});