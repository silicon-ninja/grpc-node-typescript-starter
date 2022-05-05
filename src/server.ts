import * as grpc from "@grpc/grpc-js";
import logger from "./utils/logger";
import getServer from "./app";
import { ENVIRONMENT, GRPC_PORT } from "./utils/secrets";

function main(){
    const server  = getServer();
    server.bindAsync(`0.0.0.0:${GRPC_PORT}`, grpc.ServerCredentials.createInsecure(),  (err, port) => {
        if (err) {
            logger.error(err);
            process.exit(1);
        } else {
          server.start();
          console.log("");
          console.log("░██████╗░██████╗░██████╗░░█████╗░  ░██████╗████████╗░█████╗░██████╗░████████╗███████╗██████╗░");
          console.log("██╔════╝░██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗");
          console.log("██║░░██╗░██████╔╝██████╔╝██║░░╚═╝  ╚█████╗░░░░██║░░░███████║██████╔╝░░░██║░░░█████╗░░██████╔╝");
          console.log("██║░░╚██╗██╔══██╗██╔═══╝░██║░░██╗  ░╚═══██╗░░░██║░░░██╔══██║██╔══██╗░░░██║░░░██╔══╝░░██╔══██╗");
          console.log("╚██████╔╝██║░░██║██║░░░░░╚█████╔╝  ██████╔╝░░░██║░░░██║░░██║██║░░██║░░░██║░░░███████╗██║░░██║");
          console.log("░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░░╚════╝░  ╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝");
          console.log("---------------------------------------------------------------------------------------------");
          console.log("");
          logger.debug("Made by @silicon-ninja")
          logger.info(`grpc-starter-service is running at grpc://localhost:${GRPC_PORT} in ${ENVIRONMENT} mode.`);
          if (process.env.NODE_ENV !== "production") {
              logger.debug("Logging initialized at debug level");
          }
        }
      });
}
main();



