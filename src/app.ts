import * as grpc from "@grpc/grpc-js";
import path from "path";
import { HelloWorldServiceHandlers } from "./controller/HelloServicePackage/HelloWorldService";
import * as protoLoader from "@grpc/proto-loader";
import { GRPC_PROTO_FILE } from "./utils/secrets";
import {ProtoGrpcType} from "./controller/hello";
import Service_Call_Hello_World from './services/hello_world_service';


const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, GRPC_PROTO_FILE!));
const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const HelloWorldPackage = grpcObject.HelloServicePackage;
export default function getServer(){
    const server = new grpc.Server();
    server.addService(HelloWorldPackage.HelloWorldService.service, {
        ServiceHelloWorld: Service_Call_Hello_World,
        } as HelloWorldServiceHandlers) ;
    return server;
}

