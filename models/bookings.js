const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
 
departure: String,
price: Number,
arrival: String,
time: String,
departureTime: String,

});


const Booking = mongoose.model('bookings', bookingsSchema);
module.exports = Booking;
