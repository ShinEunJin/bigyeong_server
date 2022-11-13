import { ObjectId } from 'mongoose';

import Photo from '@/models/Photo.model';
import { Request, Response } from 'express';

interface PhotoType {
  _id: ObjectId;
  imgUrl: string;
  title: string;
  writer: string;
  view: number;
  location: string;
  detailLocation: string;
}

export const photoController = async (req: Request, res: Response) => {
  console.log('success', req.body, req.file);
};
