const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://swechchhasingh2017:3AygzMS5TnB5JX76@mern.mjg31yk.mongodb.net/?retryWrites=true&w=majority&appName=mern';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3009, () => {
      console.log('Server has started on port 3009');
    });
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
  });











