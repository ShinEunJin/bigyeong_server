import multer from 'multer';
import multerS3 from 'multer-s3';

import aws from '../../aws';

const storage = multerS3({
  s3: aws.s3,
  bucket: 'bigyeong',
  key: (req, file, cb) => {
    cb(null, `photos/${file.filename}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  // fileFilter: (_req, file, cb) => {
  //   cb(null, true);
  // },
});

export default upload;
