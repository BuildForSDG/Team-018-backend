import express from 'express';

import dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.DB_URL).then(() => console.log('Connected to DB!'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Team-018 API homepage' });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(8080, () => console.log('Team-018 API running on port 8080'));
} else {
  app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Team-018 API running on port production server');
  });
}
