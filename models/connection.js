const mongoose = require('mongoose');

const conString = 'mongodb+srv://admin:GkIIVQwTad9hpYYW@cluster1.ymlqmvx.mongodb.net/trips'

const connectionString = conString;

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
