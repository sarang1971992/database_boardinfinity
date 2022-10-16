import mongoose  from "mongoose";


const connectDB = async (Database_URL) =>{

    try {

        const db_options = {
            dbName:"airindiadb",
        }

        await mongoose.connect(Database_URL,db_options);
        
        console.log("Database Connected");
    } 
    catch (err) {
     
        console.log(err);
    
    }

}


export default connectDB;