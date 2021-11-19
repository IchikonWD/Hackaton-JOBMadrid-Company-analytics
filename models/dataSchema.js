import Mongoose from 'mongoose';

const dataSchema = new Mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    founded: {
      type: Number,
      required: false,
    },
    size: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: false,
    },
    region: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    industry: {
      type: String,
      required: false,
    },
    linkedin_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Data = Mongoose.model('Data', dataSchema, 'Data');

export default Data;
