const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    donor: String,
    quality: String,
    expiry: String
});
module.exports = mongoose.model('Food', FoodSchema);



const donationSchema = new mongoose.Schema({
    donorName: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Donation', donationSchema);
