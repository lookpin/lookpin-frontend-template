import { createHttpHeaderProvider, headerPipe } from 'ts-fe-toolkit';
import { tokenProvider } from './storages';

function pipeAuthToken(header: Record<string, string>, token?: string) {
  if (!token) {
    throw new Error('로그인이 필요합니다.');
  }

  header['Authorization'] = token;

  return header;
}

function pipeMyMeta(header: Record<string, string>) {
  header['my-meta'] = 'kormelon';

  return header;
}

export function createAuthHeader() {
  return createHttpHeaderProvider(tokenProvider)(
    headerPipe.contentTypeJson,
    pipeMyMeta,
    pipeAuthToken,
  );
}
