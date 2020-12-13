import { FastifyInstance } from 'fastify';
import { getProductsSchema } from './schema';
import { ProductService } from './service';

export async function products(fastify: FastifyInstance): Promise<void> {
  fastify.get('/products', { schema: getProductsSchema }, getProductsHandler);
}

async function getProductsHandler() {
  return ProductService.fetchProducts();
}
