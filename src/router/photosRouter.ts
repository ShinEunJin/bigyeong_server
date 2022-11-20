import express from 'express';

import routes from './routes';
import { getPhotos } from '@/controllers/photoController';

const router = express.Router();

router.get(routes.photos, getPhotos);

export = router;
