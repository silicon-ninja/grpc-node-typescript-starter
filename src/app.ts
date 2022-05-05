import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { GRPC_PROTO_FILE } from "./utils/secrets";
import {ProtoGrpcType} from "../src/controller/hello";
import { HelloWorldServiceHandlers } from "./controller/HelloServicePackage/HelloWorldService";

const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, GRPC_PROTO_FILE!));
const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const HelloWorldPackage = grpcObject.HelloServicePackage;

export default function getServer(){
    const server = new grpc.Server();
    server.addService(HelloWorldPackage.HelloWorldService.service, {
        ServiceHelloWorld:(req :any, res:any)=>{
            console.log(req.request)
            res(null, req.request);
        }
        } as HelloWorldServiceHandlers) ;
        return server;
}

