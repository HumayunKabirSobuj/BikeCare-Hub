"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const CreateCustomer = (customerData) => __awaiter(void 0, void 0, void 0, function* () {
    //   console.log(customerData);
    const isExist = yield prisma_1.default.customer.findFirst({
        where: {
            email: customerData.email,
        },
    });
    //   console.log(isExist);
    if (isExist) {
        throw new Error("Customer Already Exist..");
    }
    const result = yield prisma_1.default.customer.create({
        data: customerData,
    });
    return result;
});
const GetAllCustomer = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.customer.findMany();
    return result;
});
const GetCustomerById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    return result;
});
const UpdateCustomarById = (customerId, customerData) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(customerId);
    // console.log(customerData);
    const isExist = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma_1.default.customer.update({
        where: {
            customerId,
        },
        data: customerData,
    });
    return result;
});
const DeleteCustomarById = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(customerId);
    // console.log(customerData);
    const isExist = yield prisma_1.default.customer.findUnique({
        where: {
            customerId,
        },
    });
    // console.log(isExist);
    if (!isExist) {
        throw new Error("Customer Not Found.");
    }
    const result = yield prisma_1.default.customer.delete({
        where: {
            customerId,
        },
    });
    return result;
});
exports.CustomerServices = {
    CreateCustomer,
    GetAllCustomer,
    GetCustomerById,
    UpdateCustomarById,
    DeleteCustomarById
};
