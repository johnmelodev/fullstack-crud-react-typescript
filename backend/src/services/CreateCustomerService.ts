import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateCustomerProps {
    name: string;
    email: string;
}

class CreateCustomerService {
    async execute({ name, email }: CreateCustomerProps) {

        if (!name || !email) { throw new Error("fill all the fields") }
        console.log("ROUTE CALLED");
        const customer = await prisma.customer.create({ data: { name, email, status: true } })
        return customer
    }
}

export { CreateCustomerService }
