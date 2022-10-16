 import express from 'express';
 import connectDB from './db/connectdb.js';
 import web from './routes/web.js';


const app = express();
const port = process.env.PORT || '3000';
const database_url =  process.env.database_url || "mongodb://localhost:27017"; 

//database
connectDB(database_url);


//json 
app.use(express.json());


//load routes
app.use('/flight', web);


 
app.listen(port,() =>{
     console.log("Server Running"); 
});
