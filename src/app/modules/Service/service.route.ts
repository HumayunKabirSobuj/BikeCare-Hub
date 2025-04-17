import express from "express";
import { ServiceDataController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceDataController.CreateService);
router.get("/", ServiceDataController.GetAllService);


export const ServiceRoute = router;
