import express from 'express';

import routes from './routes';
import { photoController } from '@/controllers/photoController';
import upload from '@/middlewares/multer';

const router = express.Router();

router.post(routes.photo, upload.single('photo'), photoController);

export = router;
