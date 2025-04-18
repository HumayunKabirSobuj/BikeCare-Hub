-- DropForeignKey
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_customerId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceRecord" DROP CONSTRAINT "ServiceRecord_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceRecord" ADD CONSTRAINT "ServiceRecord_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;
