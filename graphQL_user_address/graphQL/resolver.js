const User = require('../model/user');
const Address = require('../model/address');
const mongoose = require('mongoose');

module.exports = {
    findUser: async function ({ _id }) {
        const user = await User.findById({
            _id
        })
        // console.log(user)
        if (!user) {
            const error = new Error('User not found')
            error.code = 401;
            throw error;
        }
        await user.populate('add').execPopulate();
        return { ...user._doc, _id: user._id.toString(), address: user.add[0]._doc }
    },

    createUser: async function ({ userInput }, req) {
        const existingUser = await User.findOne({ email: userInput.email });
        if (existingUser) {
            const error = new Error('User exists already!');
            throw error;
        }
        const user = new User({
            emailId: userInput.emailId,
            firstName: userInput.firstName,
            lastName: userInput.lastName
        });

        console.log(user);
        const createdUser = await user.save();
        return {
            ...createdUser._doc, _id: createdUser._id.toString(),
        };

    },
    createAddress: async function ({ addressInput }, req) {
        const user = await User.findById({ _id: mongoose.Types.ObjectId(addressInput.userId) });
        console.log(addressInput, user);
        if (!user) {
            const error = new Error('User Not Found');
            throw error;
        }
        const address = new Address({
            address: addressInput.address,
            city: addressInput.city,
            zipcode: addressInput.zipcode,
            country: addressInput.country,
            userId: user._id
        });
        const createdAddress = await address.save();

        return {
            ...createdAddress._doc, _id: createdAddress._id.toString(),
        };

    }

}
