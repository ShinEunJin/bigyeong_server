import 'module-alias/register';
import dotenv from 'dotenv';
import path from 'path';

import app from './app';
import './db';

declare const process: {
  env: {
    PORT: number;
  };
};

(function () {
  const result = dotenv.config({ path: path.join(__dirname, '.', '.env') });
  if (result.parsed === undefined) {
    throw new Error('❌ Cannot loaded environment variables file');
  }
})();

app.listen(process.env.PORT, () =>
  console.log(`✅ server is connected to ${process.env.PORT}`)
);
