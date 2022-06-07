import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/boiler_plate')
  .then(() => console.log('✅ MongoDB is connected'))
  .catch((err) => console.log(`❌ ${err}`));
