import express from "express";
import { CustomerController } from "./customer.controller";

const router = express.Router();

router.post('/', CustomerController.CreateCustomer)
router.get('/', CustomerController.GetAllCustomer)

export const CustomerRoute = router;
