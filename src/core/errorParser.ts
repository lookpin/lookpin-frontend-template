import { AxiosError } from 'axios';
import { HttpApiErrorParser, isString, isUndefined } from 'ts-fe-toolkit';

type ErrorType = 'unknown' | 'auth' | 'notFound' | 'server';

interface ErrorRes {
  status: 'error';
  message: string;
}

function isAuthError(message: string) {
  return /만료|로그인/gi.test(message);
}

function toErrorType(status = 0, message?: string): ErrorType {
  if ((message && isAuthError(message)) || status === 401) {
    return 'auth';
  }
  if (status >= 500) {
    return 'server';
  }
  if (status === 404) {
    return 'notFound';
  }
  return 'unknown';
}

function isErrorRes(err: unknown): err is ErrorRes {
  const target = err as Record<string, string>;
  if (target && target.message && target.status) {
    return true;
  }
  return false;
}

class HttpRestError extends Error {
  constructor(message: string, public readonly status: ErrorType = 'unknown') {
    super(message);
  }
}

class ErrorParser implements HttpApiErrorParser<AxiosError> {
  /**
   * HTTP 에러 parser
   * 서버의 에러 타입을 일관성 있게 파싱한다.
   * @param axiosError
   * @returns
   */
  parse(axiosError: AxiosError): Error {
    try {
      const response = axiosError.response?.data as
        | ErrorRes
        | string
        | undefined;
      const errorType = toErrorType(axiosError.response?.status);

      if (isErrorRes(response)) {
        return new HttpRestError(response.message, errorType);
      }

      if (isUndefined(response) || isString(response) === false) {
        return new HttpRestError('알 수 없는 서버 오류입니다.', errorType);
      }

      if (response.substring(0, 100).indexOf('html') >= 0) {
        return new HttpRestError(
          '서버 오류입니다.\n관리자에게 문의하여 주십시요.',
          errorType,
        );
      }

      return new HttpRestError(response, errorType);
    } catch (err) {
      return new HttpRestError((err as Error).message);
    }
  }

  /**
   * parser가 끝난 후 내부적으로 실행
   * @param error
   * @returns
   */
  interrupt<E extends Error>(error: E): Promise<void> {
    if (error instanceof HttpRestError) {
      if (error.status === 'auth') {
        alert('로그인이 필요합니다.');
      }
    }

    return Promise.resolve();
  }

  /**
   * HTTP 에러는 아니나, 클라이언트에서 처리해야할 에러일 시
   * @param err
   */
  throwOther<E extends Error>(err: E): never {
    throw err;
  }
}

export const errorParser = new ErrorParser();
