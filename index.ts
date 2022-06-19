import 'module-alias/register';
import dotenv from 'dotenv';

import app from './app';
import './db';

dotenv.config();

declare const process: {
  env: {
    PORT: number;
  };
};

app.listen(process.env.PORT, () =>
  console.log(`✅ server is connected to ${process.env.PORT}`)
);
