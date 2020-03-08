const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ocorrencia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ocorrencia'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);