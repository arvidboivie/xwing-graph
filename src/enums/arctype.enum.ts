import { registerEnumType } from "type-graphql";

export enum ArcType {
    FRONT = "Front Arc",
    REAR = "Rear Arc",
    FULL_FRONT = "Full Front Arc",
    SINGLE_TURRET = "Single Turret Arc",
    DOUBLE_TURRET = "Double Turret Arc",
}

registerEnumType(ArcType, {
    name: "ArcType",
    description: "Available attack arcs",
});