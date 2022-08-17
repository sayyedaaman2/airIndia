const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({

    departureAirport : {
        type : String,
        required : true
    },
    arrivalAirport : {
        type : String,
        required : true
    },
    duration : {
        type : Number,
        requried : true
    },
    airline : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Airline'
    },
    flightDate : {
        type : Date,
        default : Date.now
    },
    departureTime : {
        type : String,
    },
    arrivalTime : {
        type : String
    },
    flightNumber : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    boardingGate : {
        type : Number
    }
}, { timestamps : true })

const flightModel = new mongoose.model('Flight',flightSchema);
module.exports = flightModel;