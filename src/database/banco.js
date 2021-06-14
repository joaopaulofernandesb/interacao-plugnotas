const mongoose = require('mongoose');
const env = require('../config/config')

const connect = () => {
  try {
    mongoose.connect(env.mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    error.message = error;
  }
};

const disconnect = () => {
    mongoose.disconnect()
}

module.exports = { connect, disconnect, mongoose };
