import express from "express";
import { ServiceDataController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceDataController.CreateService);
router.get("/", ServiceDataController.GetAllService);
router.get("/:id", ServiceDataController.GetServiceById);
router.put("/:id", ServiceDataController.UpdateServiceById);


export const ServiceRoute = router;
