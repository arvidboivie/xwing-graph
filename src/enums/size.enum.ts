import { registerEnumType } from "type-graphql";

export enum Size {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large"
}

registerEnumType(Size, {
  name: "Size",
  description: "All ship sizes"
});
