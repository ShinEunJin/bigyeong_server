import express from 'express';
import cors from 'cors';
import path from 'path';

import router from './src/router';

import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, './.env.development') });
} else {
  dotenv.config({ path: path.join(__dirname, './.env.production') });
}

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', express.static('upload'));

app.use(router);

export default app;
