import Photo from '@/models/Photo.model';
import { Response } from 'express';

// interface PhotoRequestType {
//   file: {
//     location: string;
//   };
//   body: {
//     data: string; // JSON.stringfy({})
//   };
// }

export const uploadPhoto = async (req: any, res: any) => {
  try {
    const { location } = req.file;
    const { data } = req.body;
    const photo = new Photo({
      imageUri: location,
      ...JSON.parse(data),
      category: 'TODEST',
    });
    await photo.save();
    return res.json({ photo });
  } catch (error) {
    return { error };
  }
};
