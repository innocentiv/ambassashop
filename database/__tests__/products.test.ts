import fastify from 'fastify';
import * as Ajv from 'ajv';
import { productsSchema } from '../src/products/schema';
import { products } from '../src/products';

const ajv = new Ajv({ allErrors: true });
const validateProducts = ajv.compile(productsSchema.valueOf());

describe('products plugin test', () => {
  it('return a list of products', async () => {
    const server = fastify({ logger: { level: 'silent' } });
    server.register(products, { prefix: '/api/v1' });

    const res = await server.inject({
      method: 'GET',
      url: '/api/v1/products',
      headers: {
        'Content-type': 'application/json',
      },
    });

    expect(res.statusCode).toBe(200);
    expect(validateProducts(JSON.parse(res.body))).toBe(true);
  });
});
