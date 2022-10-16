import FlightModel from "../models/createflight.js";
import FlightBookingModel from "../models/bookflight.js"
import mongoose from 'mongoose';
 


class FlightController {

    static createFlight = async (req,res) => {
 
         try {
                  
              const  {flightName,flightNo,flightCategory,totalSeats} = req.body
              const check = await FlightModel.findOne({ flightNo:flightNo })
              
              if(check){
                  res.send("Already Exists Please Add New Flight");
              } 
              else{
               
                   const doc = new FlightModel({
                       
                    flightName:flightName,
                    
                    flightNo:flightNo,
                    
                    flightCategory:flightCategory,
                    
                    totalSeats:totalSeats

                   });
    
                    const result = await doc.save();
    
                    res.send(result);
              }
            }

           catch (error) {
            console.log(error); 
         }  
    }
     
    //  static bookFlight  =  async (req,res) => {
    //     let   {travelBetweenCities,flightTimings,totalSeats,bookedSeats,availableSeats,id} = req.body
    //     // id = new mongoose.ObjectId(id)
    //     console.log(id); 
    //     //const planeNo = await FlightModel.findOne({_id:new mongoose.ObjectId(id)});
    //     const planeNo = await FlightModel.find({_id:id});
    //     res.send(planeNo); 
    // }

 

    static bookFlight = async (req,res) => {

        try {
            const  {travelBetweenCities,flightTimings,flightNo} = req.body
            
            //const planeNo = await FlightModel.find({flightNo:flightNo});
            const check = await FlightModel.findOne({ flightNo:flightNo })
              
            if(check){

            const doc = new FlightBookingModel({
                       
                travelBetweenCities:travelBetweenCities,
                
                flightTimings:flightTimings,

                flightNo: check.flightNo,

                                         
               });

                const result = await doc.save();

                res.send(result)
                //res.send(`Your ticket is successsfully booked of ${result.travelBetweenCities} at ${flightTimings}`);
            } 
             else {
                    res.send("No plane Exist");
                 }
                

        } catch (error) {
            console.log(error)
        }

        //res.send("Booked flight for Destination");
    }
}



export default FlightController;