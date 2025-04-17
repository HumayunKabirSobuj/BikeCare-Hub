import express from "express";
import { ServiceDataController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceDataController.CreateService);
// router.get("/", BikeController.GetAllBike);
// router.get("/:id", BikeController.GetBikeById);

export const ServiceRoute = router;
