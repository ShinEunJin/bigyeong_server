import express from 'express';

import routes from './routes';
import { getPhoto, getPhotos } from '@/controllers/photoController';

const router = express.Router();

router.get(routes.photos, getPhotos);

router.get(routes.photo, getPhoto);

export = router;
