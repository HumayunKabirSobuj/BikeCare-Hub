import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post('/', CustomerController.CreateCustomer)

export const CustomerRoute = router;
