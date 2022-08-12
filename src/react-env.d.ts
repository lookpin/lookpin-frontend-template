interface ImportMetaEnv extends Record<string, string> {
  // 환경 변수들에 대한 타입 정의가 가능합니다.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
