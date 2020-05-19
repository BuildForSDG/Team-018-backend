import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.createConnection(process.env.DB_URL);

autoIncrement.initialize(connection);

const researcherSchema = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  }
});

researcherSchema.plugin(autoIncrement.plugin, {
  model: 'Researcher',
  startAt: 1,
  incrementBy: 1
});

const Researcher = mongoose.model('Researcher', researcherSchema);

export default Researcher;
