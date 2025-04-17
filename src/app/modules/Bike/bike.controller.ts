import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BikeServices } from "./bike.service";

const CreateBike = catchAsync(async (req, res) => {
  const result = await BikeServices.CreateBike(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

export const BikeController = {
  CreateBike,
};
