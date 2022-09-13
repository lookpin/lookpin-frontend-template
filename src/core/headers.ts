import { createHttpHeaderPipe, httpHeaderOperator } from 'jordy';
import { tokenProvider } from './storages';

function pipeAuthToken(header: Map<string, string>, token?: string) {
  if (!token) {
    throw new Error('로그인이 필요합니다.');
  }

  return header.set('Authorization', token);
}

function pipeMyMeta(header: Map<string, string>) {
  return header.set('my-meta', 'kormelon');
}

export function createAuthHeader() {
  return createHttpHeaderPipe(tokenProvider)(
    httpHeaderOperator.contentTypeJson,
    pipeMyMeta,
    pipeAuthToken,
  );
}
