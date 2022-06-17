import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (
    req: any,
    file: any,
    cb: (arg0: null, arg1: string) => void
  ) {
    cb(null, '/tmp/my-uploads');
  },
  filename: function (
    req: any,
    file: { fieldname: string },
    cb: (arg0: null, arg1: string) => void
  ) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

export default upload;
