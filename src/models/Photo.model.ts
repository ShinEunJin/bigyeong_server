import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
    },
    view: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    detailLocation: {
      type: String,
    },
  },
  { timestamps: true }
);

const Photo = mongoose.model('Photo', PhotoSchema);

export default Photo;
