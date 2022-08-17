const Booking = require('../models/booking.model');

const createBooking= async (data)=>{
    try{
        const newBooking= {
            id : data.id,
            flight: data.flight,
            user : data.user,
            status : data.status
        }

        const response = await Booking(newBooking).save();
        return response;
    }catch(err){
        console.log(err);
    }
}


const cancelBooking = async (id)=>{
    
    try{
        const response = await Booking.findOneAndUpdate({id : id},{status : "cancelled"});
        return response;
    }catch(err){
        console.log(err);

    }
}

const boardingPass =  async (id)=>{
    try{
        const response = await Booking.findOne({id : id}).populate("flight").populate("user").exec();
        return response;
    }catch(err){
        console.log(err);

    }

}

const getAllTraveler = async (flightNumber)=>{
    try{
        const response = await Booking.find({flight : flightNumber}).populate("user").exec();
        return response;
    }catch(err){
        console.log(err);

    }
}
module.exports = {
    createBooking,
    cancelBooking,
    boardingPass,
    getAllTraveler
}
