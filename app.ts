import express, { Request, Response } from 'express';

import upload from './src/middlewares/multer';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/photo', upload.single('testFile'), (req, res) => {
  console.log(req.file);
  res.json(req.file);
});

export default app;
