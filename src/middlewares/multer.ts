import multer, { Multer } from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';
import { S3Client } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const getFileDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}_${month}_${day}_${hour}_${minute}_${uuidv4().slice(0, 8)}`;
};

const s3 = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_PASSWORD,
  },
});

let upload: Multer;

if (process.env.NODE_ENV === 'development') {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
      cb(
        null,
        `${file.fieldname}_${Date.now()}.${file.mimetype.split('/')[1]}`
      );
    },
  });

  upload = multer({ storage });
} else {
  const storage = multerS3({
    s3,
    bucket: 'bigyeong',
    key: (_req, file, cb) => {
      cb(null, `bike/${getFileDate()}.${file.mimetype.split('/')[1]}`);
    },
  });

  upload = multer({
    storage,
    limits: { fileSize: 1024 * 1024 * 10 },
    fileFilter: (_req, file, cb) => {
      let fileType = file.mimetype.split('/')[1];
      if (fileType === 'png' || fileType === 'jpeg' || fileType === 'jpg') {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  });
}

export default upload;
