import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import Bike from '@/models/Bike.model';

interface BikeType {
  _id: ObjectId;
  maker: string;
  model: string;
  image: string;
  displacement: number;
  genre: string;
}

export const getBikes = async (req: Request, res: Response) => {
  return res.send(['yamaha', 'honda', 'kawasaki', 'suzuki']);
};

export const getBikess = async (req: Request, res: Response) => {
  console.log(req.query, req.params);
  const { maker } = req.query;
  return res.send(`${maker} + hhi`);
};
