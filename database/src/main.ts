import fastify, { FastifyInstance } from 'fastify';
import fastifyEnv from 'fastify-env';
import { envOptions } from './libs/config';
import { products } from './products';
import { currencies } from './currencies';

const server = fastify({
  logger: true,
});

const API_PREFIX = '/api/v1';

const start = async (): Promise<FastifyInstance> => {
  try {
    await server
      .register(fastifyEnv, envOptions)
      .register(currencies, { prefix: API_PREFIX })
      .register(products, { prefix: API_PREFIX })
      .ready();
    await server.listen(server.config.API_PORT, server.config.API_HOST);
    return server;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
