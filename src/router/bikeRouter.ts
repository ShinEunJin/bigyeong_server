import express from 'express';
import routes from './routes';
import upload from '@/middlewares/multer';
import { getBikes, getBikess } from '@/controllers/bikeController';

const router = express.Router();

router.get(routes.bikes, getBikes);
router.get('/api/v1/bikess', getBikess);

export = router;
