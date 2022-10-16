import mongoose from "mongoose";

//defining schema
const flightSchema = new mongoose.Schema({
    
    //flightFromCreateFlight: { type:mongoose.Schema.Types.ObjectId, ref: 'flights' },
    flightName: {type: String, required: true},
    flightNo: {type: String, required: true},
    flightCategory: {type: String, required: true},
    

});


const FlightModel = mongoose.model("flight", flightSchema);

export default FlightModel