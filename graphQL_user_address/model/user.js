const mongoose = require('mongoose');
const Address = require('../model/address')

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

    }
})
userSchema.virtual('add', {
    ref: Address,
    localField: '_id',
    foreignField: 'userId'
})

const User = mongoose.model('User', userSchema);

module.exports = User;
