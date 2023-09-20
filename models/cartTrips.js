const mongoose = require('mongoose');

const cartTripSchema = mongoose.Schema({
 
departure: String,
price: Number,
date: String,
arrival: String,
time: String

});
const cartTrip = mongoose.model('cart', cartTripSchema);
module.exports = cartTrip;
