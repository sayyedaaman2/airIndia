const Review = require('../models/review.model');

const createReview = async (data)=>{
    try{
        const newReview = {
            user : data.user,
            comment : data.comment,
            flight : data.flight
        }

        const response = await Review(newReview).save();
        return response;
    }catch(err){
        console.log(err);
    }
}


const destoryReview = async (id)=>{
    
    try{
        const response = await Review.findByIdAndDelete(id);
        return response;
    }catch(err){
        console.log(err);

    }
}

const getReview =  async (user, flight)=>{
    try{
        const response = await Review.find({user : user, flight : flight});
        return response;
    }catch(err){
        console.log(err);

    }

}

const getAllReview= async (flight)=>{
    try{
        const response = await Review.find({flight : flight});
        return response;
    }catch(err){
        console.log(err);

    }
}

module.exports = {
    createReview,
    destoryReview,
    getReview,
    getAllReview
}
