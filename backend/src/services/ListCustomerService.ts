import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

class ListCustomerService {
    async execute() {
        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}

export { ListCustomerService }
