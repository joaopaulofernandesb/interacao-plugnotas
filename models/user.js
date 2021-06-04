const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    cep:{
        type: String,
        unique: true,
        require: true,
    },
    status:{
        type: String,
        require: true,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;