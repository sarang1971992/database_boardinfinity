import express from "express";
const router = express.Router();

import FlightController from "../controllers/flightController.js";


//router.get('/', FlightController.createFlight);
 router.post('/create', FlightController.createFlight);
 router.post('/booking', FlightController.bookFlight);

export default router;