import { createHttpApi } from 'jordy';

import { env } from '@common/env';
import { createAuthHeader } from './headers';

export const authApi = createHttpApi(env.baseApiUrl, createAuthHeader);
