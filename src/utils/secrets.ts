import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
    logger.debug("Using .env file to supply config environment variables")
    dotenv.config({ path: ".env" })
}

export const ENVIRONMENT = process.env.NODE_ENV
export const MONGODB_URI = process.env["MONGODB_URI"]
export const GRPC_PORT = process.env["GRPC_PORT"]
export const GRPC_PROTO_FILE = process.env["GRPC_PROTO_FILE"]

if(!GRPC_PROTO_FILE){
    logger.error("GRPC_PROTO_FILE is not set in .env file")
    process.exit(1)
}

if(!GRPC_PORT){
    logger.error("GRPC_PORT is not set in the environment variables")
    process.exit(1)
}
if (! MONGODB_URI) {
    logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

