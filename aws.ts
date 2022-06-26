import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

declare const process: {
  env: {
    AWS_ACCESS_KEY: string;
    AWS_ACCESS_PASSWORD: string;
    AWS_REGION: string;
  };
};

const { AWS_ACCESS_KEY, AWS_ACCESS_PASSWORD, AWS_REGION } = process.env;

const s3 = new S3Client({
  credentials: { accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_ACCESS_KEY },
  // region: AWS_REGION,
});

export default { s3 };
