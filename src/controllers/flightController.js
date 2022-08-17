const FlightService = require('../service/flightService');

const createFlight = async (req, res)=>{
    
    try{
        
        const flight = await FlightService.createFlight(req.body);
        res.status(200).json({
            success : true,
            message : "Successfully created Flight",
            data : flight
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Something went wrong",
        })
    }
}

const getFlight = async (req , res)=>{
    try{
        
        const flight = await FlightService.getFlight(req.params.flightNumber);
        res.status(200).json({
            success : true,
            message : "Successfully fetched Flight",
            data : flight
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Something went wrong",
        })
    }
}

const getAllFlights= async (req , res)=>{
    try{
        
        const flights = await FlightService.getAllFlight(req.query);
        res.status(200).json({
            success : true,
            message : "Successfully fetched All Flight",
            data : flights
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Something went wrong",
        })
    }
}

const destoryFlight = async (req , res)=>{
    try{
        
        const flight = await FlightService.destoryFlight(req.query.flightNumber);
        res.status(200).json({
            success : true,
            message : "Successfully deleted Flight",
            data : flight
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : "Something went wrong",
        })
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    destoryFlight
}