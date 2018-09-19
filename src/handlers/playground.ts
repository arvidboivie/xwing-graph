import "reflect-metadata";
import { GraphQLServerLambda } from "graphql-yoga";
import { ShipResolver } from "../resolvers/ship.resolver";
import { buildSchemaSync } from "type-graphql";
import { UpgradeResolver } from "../resolvers/upgrade.resolver";

// build TypeGraphQL executable schema
const schema = buildSchemaSync({
  resolvers: [ShipResolver, UpgradeResolver]
});

const playground = new GraphQLServerLambda({ schema });

export default playground.playgroundHandler;
