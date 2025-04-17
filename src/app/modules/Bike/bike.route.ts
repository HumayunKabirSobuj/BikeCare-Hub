import express from "express";
import { BikeController } from "./bike.controller";

const router = express.Router();

router.post("/", BikeController.CreateBike);

export const BikeRoute = router;
