import { ApolloServer } from 'apollo-server-fastify';
import fastify, { FastifyInstance } from 'fastify';
import fastifyEnv from 'fastify-env';
import { getDataSources } from './dataSources';
import { envOptions } from './libs/config';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = fastify({
  logger: true,
});

const start = async (): Promise<FastifyInstance> => {
  try {
    await server.register(fastifyEnv, envOptions);

    const apollo = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: getDataSources(server.config) as any,
    });

    await server.register(apollo.createHandler()).ready();
    await server.listen(server.config.API_PORT, server.config.API_HOST);
    return server;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
