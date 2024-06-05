import { PrismaClient } from "@prisma/client";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerService {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("Invalid request");
        }

        const prismaClient = new PrismaClient();
        const findCustomer = await prismaClient.customer.findFirst({ where: { id: id } });

        if (!findCustomer) {
            throw new Error("The client does not exist");
        }

        await prismaClient.customer.delete({ where: { id: findCustomer.id } });

        return { message: "Successfully deleted" };
    }
}

export { DeleteCustomerService };
