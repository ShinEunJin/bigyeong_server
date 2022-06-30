import express from 'express';
import routes from './routes';
import upload from '@/middlewares/multer';
import { uploadPhoto } from '@/controllers/photoController';

const router = express.Router();

router.post(routes.photo, upload.single('photo'), uploadPhoto);

export = router;
