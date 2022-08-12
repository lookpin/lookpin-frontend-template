interface AppEnviorment {
  /**
   * 개발 or 프로덕션 환경 여부
   *
   * env 파일에 설정하지 않았다면 자동으로 vite의 MODE를 적용한다.
   */
  mode: string;
  /**
   * 현재 운영 환경인지 여부
   */
  production: boolean;
  /**
   * 현재 개발 환경인지 여부
   */
  development: boolean;
  /**
   * API의 기본 경로
   */
  baseApiUrl: string;
}

const mode = import.meta.env.VITE_ENV || import.meta.env.MODE;

export const env: AppEnviorment = {
  mode,
  production: mode === 'production',
  development: mode === 'development',
  baseApiUrl: import.meta.env.VITE_BASE_API_URL || '',
};
