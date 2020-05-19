import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

const farmerSchema = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String,
    unique: true
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
  profilePicture: {
    type: String
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  },
  joined: {
    type: Date,
    default: Date.now
  },
  farms: [{ ref: 'Farm', type: Number }]
});

farmerSchema.plugin(autoIncrement.plugin, {
  model: 'Farmer',
  startAt: 1,
  incrementBy: 1
});

const Farmer = mongoose.model('Farmer', farmerSchema);

export default Farmer;
