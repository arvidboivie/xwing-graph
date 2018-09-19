import "reflect-metadata";
import { GraphQLServerLambda } from "graphql-yoga";
import { ShipResolver } from "../resolvers/ship.resolver";
import { buildSchemaSync } from "type-graphql";
import { APIGatewayEvent, Context, Callback } from "aws-lambda";

// build TypeGraphQL executable schema
const schema = buildSchemaSync({
  resolvers: [ShipResolver]
});

// Create GraphQL server
// const playground = (
//     event: APIGatewayEvent,
//     context: Context,
//     callback: Callback
// ) => {
//     return new GraphQLServerLambda({ schema }).playgroundHandler(
//         event,
//         context,
//         callback
//     );
// }

const playground = new GraphQLServerLambda({ schema });

export default playground.playgroundHandler;
