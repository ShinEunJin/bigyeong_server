import Photo from '@/models/Photo.model';
import { ObjectId } from 'mongoose';
import { Request, Response } from 'express';

interface PhotoType {
  __v: number;
  _id: ObjectId;
  category: 'TORIDE' | 'TODEST';
  imageUri: string;
  title: string;
  location: string;
  detailLocation: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface File {
  file: {
    location: string;
  };
}

export const uploadPhoto = async (req: any, res: Response) => {
  try {
    const { location } = req.file;
    const { data } = req.body;
    const photo = new Photo({ imageUri: location, ...JSON.parse(data) });
    await photo.save();
    return res.json(photo);
  } catch (error) {
    console.log('photoController uploadPhoto');
    return { error };
  }
};

export const getPhotos = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const photos: PhotoType[] = await Photo.find({ category });
    if (photos.length > 0) {
      return res.json(photos);
    } else {
      return res.json(null);
    }
  } catch (error) {
    console.log('photoController getPhotos');
    return { error };
  }
};

export const getPhoto = async (req: Request, res: Response) => {
  try {
    const { id, category } = req.query;
    const photo: PhotoType | null = await Photo.findOne({ _id: id, category });
    if (photo) {
      return res.json(photo);
    }
  } catch (error) {
    console.log('photoController getPhoto');
    return { error };
  }
};
