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
  try {
    const { maker, model, genre } = req.query;
    console.log({ maker, model, genre });
    let body: any = {};
    if (maker) body['maker'] = maker;
    if (model) body['model'] = model;
    if (genre) body['genre'] = genre;
    const bikes: BikeType[] = await Bike.find(body);
    console.log('b', bikes);
    if (bikes.length > 0) return res.send(bikes);
    else return res.json(null);
  } catch (error) {
    return { error };
  }
};
