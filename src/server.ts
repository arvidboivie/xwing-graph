import "reflect-metadata";
import { GraphQLServer, Options } from "graphql-yoga";
import { ShipResolver } from "./resolvers/ship.resolver";
import { buildSchema, buildSchemaSync } from "type-graphql";
import { UpgradeResolver } from "./resolvers/upgrade.resolver";

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = buildSchemaSync({
    resolvers: [ShipResolver, UpgradeResolver]
  });

  // Create GraphQL server
  const server = new GraphQLServer({ schema });

  // Configure server options
  const serverOptions: Options = {
    port: 4000,
    endpoint: "/graphql",
    playground: "/playground"
  };

  // Start the server
  server.start(serverOptions, ({ port, playground }) => {
    console.log(
      `Server is running, GraphQL Playground available at http://localhost:${port}${playground}`
    );
  });
}

bootstrap();
