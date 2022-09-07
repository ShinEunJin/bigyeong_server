import mongoose from 'mongoose';

const BikeScheme = new mongoose.Schema(
  {
    maker: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    displacement: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        'sport',
        'naked',
        'cruiser',
        'touring',
        'off_road',
        'dual_purpose',
        'scooter',
        'underbone',
        'etc',
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const Bike = mongoose.model('Bike', BikeScheme);

export default Bike;
