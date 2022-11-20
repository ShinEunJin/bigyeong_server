import express from 'express';

import routes from './routes';
import { uploadPhoto } from '@/controllers/photoController';
import upload from '@/middlewares/multer';

const router = express.Router();

router.post(routes.photo, upload.single('photo'), uploadPhoto);

export = router;
