import express from 'express';
import routes from './routes';
import upload from '@/middlewares/multer';
import {
  getPhoto,
  getPhotos,
  uploadPhoto,
} from '@/controllers/photoController';

const router = express.Router();

router.get(routes.photos, getPhotos);

router.get(routes.photo, getPhoto);
router.post(routes.photo, upload.single('photo'), uploadPhoto);

export = router;
