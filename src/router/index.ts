import express from 'express';
import fs from 'fs';

const router = express.Router();

fs.readdir('./src/router', (err, files) => {
  if (err) {
    console.log('@/router/index 8 line', { err });
    throw err;
  }
  files.forEach((file) => {
    if (file === 'index.ts' || file === 'routes.ts') return;
    else {
      const apiModule = require(`./${file.slice(0, -3)}`);
      router.use(apiModule);
    }
  });
});

export default router;
