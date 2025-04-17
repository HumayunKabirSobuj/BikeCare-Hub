import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceDataService } from "./service.service";

const CreateService = catchAsync(async (req, res) => {
  const result = await ServiceDataService.CreateService(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

export const ServiceDataController = {
  CreateService,
};
