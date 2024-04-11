import { FastifyInstance } from "fastify";

// const saveClientOpts = {
//     handler: saveClient,
// };
// const getClientByIdOpts = {
//     handler: getClientById,
// };
// const updateClientOpts = {
//     handler: updateClient,
// };

const routes = (fastify: FastifyInstance, _, done) => {
  // fastify.post("/create", saveClientOpts);
  // fastify.get("/:id", getClientByIdOpts);
  // fastify.put("/update", updateClientOpts);
  done();
};

export default routes;
