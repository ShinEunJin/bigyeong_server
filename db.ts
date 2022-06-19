import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

declare const process: {
  env: {
    MONGO_URL: string;
  };
};

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('✅ MongoDB is connected'))
  .catch((err) => console.log(`❌ ${err}`));
