import { createHttpApi } from 'ts-fe-toolkit';

import { env } from '@common/env';
import { createAuthHeader } from './headers';
import { errorParser } from './errorParser';

export const authApi = createHttpApi(
  env.baseApiUrl,
  errorParser,
  createAuthHeader,
);
