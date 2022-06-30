import express from 'express';
import router from './src/router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

export default app;
