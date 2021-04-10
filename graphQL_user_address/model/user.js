const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true

    },
    lastName: {
        type: String,
        required: true,
        trim: true

    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
