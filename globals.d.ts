declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    NODE_ENV: 'development' | 'production' | 'test';
    MONGO_URL: string;
    AWS_ACCESS_KEY: string;
    AWS_ACCESS_PASSWORD: string;
  }
}
