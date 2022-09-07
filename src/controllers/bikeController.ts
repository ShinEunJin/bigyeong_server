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
    const query = req.query;
    let body = {};
    for (const [key, val] of Object.entries(query)) {
      if (val) Object.assign(body, { [key]: val });
    }
    const bikes: BikeType[] = await Bike.find(body);
    if (bikes.length > 0) return res.send(bikes);
    else return res.json(null);
  } catch (error) {
    return { error };
  }
};
