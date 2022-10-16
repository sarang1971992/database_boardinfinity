import mongoose from "mongoose";


//defining schema
const flightBookSchema = new mongoose.Schema({
    
    
    travelBetweenCities: {type: String, required: true},
    flightTimings: {type: String, required: true},
    flightNo: {type: String, required: true},
 

});


const FlightBookingModel = mongoose.model("flightbook", flightBookSchema);

export default FlightBookingModel