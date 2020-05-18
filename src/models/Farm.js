import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

const farmSchema = mongoose.Schema({
  farmName: {
    type: String
  },
  owner: {
    ref: 'Farmer',
    type: Object
  },
  country: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  financials: {
    type: Object
  },
  farmPictures: [String]
});

mongoose.plugin(autoIncrement.plugin, {
  model: 'Farm',
  startAt: 1,
  incrementBy: 1
});

const Farm = mongoose.model('Farm', farmSchema);

export default Farm;
