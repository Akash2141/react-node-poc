import { HOST, PORT } from "./config";
import buildFastifyApp from "./app";

async function main() {
  try {
    const fastifyApp = await buildFastifyApp();
    fastifyApp.listen({ port: PORT, host: HOST }, async () => {
      // ! Removed comments as they were causing problems in container logs.
      // if (err) {
      //     console.error(String(err));
      // }
      // console.log(`Server listening at ${address}`);
      console.log("server started");
    });
  } catch (err) {
    // console.log("Failed to initialize Fastify server ...");
    // console.log(err);
  }
}

// Run the application
main();
