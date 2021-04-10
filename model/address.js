const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: Number,
        required: true,
        trim: true

    },
    country: {
        type: String,
        required: true,
        trim: true

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
