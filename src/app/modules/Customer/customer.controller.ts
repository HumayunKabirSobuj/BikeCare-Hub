import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CustomerServices } from "./customer.service";

const CreateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.CreateCustomer(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
const GetAllCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.GetAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

export const CustomerController = {
  CreateCustomer,
  GetAllCustomer
};
