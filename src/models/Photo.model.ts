import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    location: {
      type: String,
    },
    detailLocation: {
      type: String,
    },
    description: {
      type: String,
    },
    imageUri: {
      type: String,
    },
    category: {
      type: String,
      enum: ['TODEST', 'TORIDE'],
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model('Photo', PhotoSchema);

export default Photo;
