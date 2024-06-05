import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, name, email } = request.body as { id: string, name: string, email: string };

        const customerService = new UpdateCustomerService();

        const updatedCustomer = await customerService.execute({ id, name, email });

        reply.send(updatedCustomer);
    }
}

export { UpdateCustomerController };
