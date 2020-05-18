import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

const investorSchema = mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  }
});

mongoose.plugin(autoIncrement.plugin, {
  model: 'Investor',
  startAt: 1,
  incrementBy: 1
});

const Investor = mongoose.model('Investor', investorSchema);

export default Investor;
