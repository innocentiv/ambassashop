import { FastifyInstance } from 'fastify';
import { getCurrenciesSchema } from './schema';
import { CurrencyService } from './service';

export async function currencies(fastify: FastifyInstance): Promise<void> {
  fastify.get(
    '/currencies',
    { schema: getCurrenciesSchema },
    getCurrenciesHandler,
  );
}

async function getCurrenciesHandler() {
  return CurrencyService.fetchCurrencies();
}
