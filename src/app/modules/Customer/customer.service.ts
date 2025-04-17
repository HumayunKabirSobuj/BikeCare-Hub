import { Customer } from "@prisma/client";
import prisma from "../../../shared/prisma";

const CreateCustomer = async (customerData: Customer) => {
  //   console.log(customerData);

  const isExist = await prisma.customer.findFirst({
    where: {
      email: customerData.email,
    },
  });

  //   console.log(isExist);

  if (isExist) {
    throw new Error("Customer Already Exist..");
  }

  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};

export const CustomerServices = {
  CreateCustomer,
};
