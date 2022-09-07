import express from 'express';
import routes from './routes';
import upload from '@/middlewares/multer';
import { getBikes } from '@/controllers/bikeController';

const router = express.Router();

router.get(routes.bikes, getBikes);

export = router;
