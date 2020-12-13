import fastify from 'fastify';
import * as Ajv from 'ajv';
import { currenciesSchema } from '../src/currencies/schema';
import { currencies } from '../src/currencies';

const ajv = new Ajv({ allErrors: true });
const validateCurrencies = ajv.compile(currenciesSchema.valueOf());

describe('currencies plugin test', () => {
  it('return a list of currencies', async () => {
    const server = fastify({ logger: { level: 'silent' } });
    server.register(currencies, { prefix: '/api/v1' });

    const res = await server.inject({
      method: 'GET',
      url: '/api/v1/currencies',
      headers: {
        'Content-type': 'application/json',
      },
    });

    expect(res.statusCode).toBe(200);
    expect(validateCurrencies(JSON.parse(res.body))).toBe(true);
  });
});
