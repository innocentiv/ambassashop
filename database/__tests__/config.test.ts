import * as Ajv from 'ajv';

import { envOptions } from '../src/libs/config';

const ajv = new Ajv({ allErrors: true });
const validateEnv = ajv.compile(envOptions.schema.valueOf());

describe('config lib test', () => {
  it('config schema is validating env', async () => {
    const exampleEnv = {
      NODE_ENV: 'development',
      API_HOST: '0.0.0.0',
      API_PORT: '5000',
    };

    const emptyEnv = {};

    expect(validateEnv(exampleEnv)).toBe(true);
    expect(validateEnv(emptyEnv)).toBe(false);
  });
});
