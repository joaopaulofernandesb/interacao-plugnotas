const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  cep: {
    type: Number,
    unique: true,
    require: true,
  },
  status: {
    type: String,
    require: true,
    default: 'PENDENTE',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

