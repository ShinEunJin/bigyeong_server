import { ObjectId } from 'mongoose';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

import Photo from '@/models/Photo.model';

dotenv.config();

interface PhotoInfoType {
  title: string;
  location: string;
  detailLocation: string;
  writer?: string;
  view?: number;
}

interface PhotoType extends PhotoInfoType {
  _id: ObjectId;
  imgUrl: string;
}

export const uploadPhoto = async (req: Request, res: Response) => {
  const photoInfo: PhotoInfoType = JSON.parse(req.body.photoInfo);
  const photoFile = req.file;

  const filteredImgUrl =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:${process.env.PORT}/${photoFile?.path}`
      : photoFile?.path;

  const data = {
    imgUrl: filteredImgUrl,
    title: photoInfo?.title,
    location: photoInfo?.location,
    detailLocation: photoInfo?.detailLocation,
    writer: photoInfo?.writer || null,
    view: photoInfo?.view || 0,
  };
  const photo = new Photo(data);
  await photo.save();

  if (photo) return res.json(photo);
  else return res.send('error');
};

export const getPhotos = async (req: Request, res: Response) => {
  const photos = await Photo.find();
  if (photos) return res.json(photos);
};
