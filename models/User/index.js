const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    photoURL: {
        type: String,
        required: false,
    },
    phoneNumber:{
        type: String,
        required: false,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;