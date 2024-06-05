import { PrismaClient } from "@prisma/client";

interface UpdateCustomerProps {
    id: string;
    name: string;
    email: string;
}

class UpdateCustomerService {
    async execute({ id, name, email }: UpdateCustomerProps) {
        if (!id || !name || !email) {
            throw new Error("Invalid request");
        }

        const prismaClient = new PrismaClient();
        const findCustomer = await prismaClient.customer.findFirst({ where: { id: id } });

        if (!findCustomer) {
            throw new Error("The client does not exist");
        }

        const updatedCustomer = await prismaClient.customer.update({
            where: { id: findCustomer.id },
            data: { name, email }
        });

        return updatedCustomer;
    }
}

export { UpdateCustomerService };
