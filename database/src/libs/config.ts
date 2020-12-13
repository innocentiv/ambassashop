import S from 'fluent-schema';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      NODE_ENV: 'development' | 'testing' | 'production';
      API_HOST: string;
      API_PORT: string;
    };
  }
}

export const envSchema = S.object()
  .prop(
    'NODE_ENV',
    S.string().enum(['development', 'testing', 'production']).required(),
  )
  .prop('API_HOST', S.string().required())
  .prop('API_PORT', S.string().required());

export const envOptions = {
  schema: envSchema,
  dotenv: true,
};
