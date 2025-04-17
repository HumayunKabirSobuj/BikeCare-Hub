import { ServiceRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const CreateService = async (serviceData: ServiceRecord) => {
  //   console.log(serviceData);

  const isBikeExist = await prisma.bike.findUnique({
    where: {
      bikeId: serviceData.bikeId,
    },
  });

  //   console.log(isBikeExist);

  if (!isBikeExist) {
    throw new Error("Bike Does not exist.");
  }

  const result = await prisma.serviceRecord.create({
    data: serviceData,
  });

  return result;
};

export const ServiceDataService = {
  CreateService,
};
