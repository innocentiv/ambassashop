import S from 'fluent-schema';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      NODE_ENV: 'development' | 'testing' | 'production';
      API_HOST: string;
      API_PORT: string;
      RATES_API_URL: string;
      RATES_API_KEY: string;
      PRODUCTS_API_URL: string;
      CURRENCY_API_URL: string;
    };
  }
}

export const envSchema = S.object()
  .prop(
    'NODE_ENV',
    S.string().enum(['development', 'testing', 'production']).required(),
  )
  .prop('API_HOST', S.string().required())
  .prop('API_PORT', S.string().required())
  .prop('RATES_API_URL', S.string().required())
  .prop('RATES_API_KEY', S.string().required())
  .prop('PRODUCTS_API_URL', S.string().required())
  .prop('CURRENCY_API_URL', S.string().required());

export const envOptions = {
  schema: envSchema,
  dotenv: true,
};
