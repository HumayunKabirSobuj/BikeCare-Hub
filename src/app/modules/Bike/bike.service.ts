import { Bike } from "@prisma/client";
import prisma from "../../../shared/prisma";

const CreateBike = async (bikeData: Bike) => {
  // console.log(bikeData);

  const isCustomerExist = await prisma.customer.findUnique({
    where: {
      customerId: bikeData.customerId,
    },
  });

  //   console.log(isCustomerExist);
  if (!isCustomerExist) {
    throw new Error("Customer Not Found.");
  }

  const result = await prisma.bike.create({
    data: bikeData,
  });

  return result;
};

export const BikeServices = {
  CreateBike,
};
