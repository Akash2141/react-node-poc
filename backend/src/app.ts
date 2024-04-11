import fastify, { FastifyInstance } from "fastify";
import routes from "./routes/route";

const buildFastifyApp = async () => {
  const server: FastifyInstance = fastify({
    logger: false,
    bodyLimit: 30 * 1024 * 1024, // Default Limit set to 30MB
  });

  await server.register(routes);

  return server;
};

export default buildFastifyApp;
