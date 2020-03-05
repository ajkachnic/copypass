import mongoose from 'mongoose';
const dotenv = require('dotenv').config();
export default async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology:true
  });
};