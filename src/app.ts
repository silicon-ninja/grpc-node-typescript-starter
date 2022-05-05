import * as grpc from "@grpc/grpc-js";

export default function getServer(){
    const server = new grpc.Server();
    return server;
}

