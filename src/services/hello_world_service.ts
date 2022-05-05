import getServer from "../app";
import * as grpc from "@grpc/grpc-js";
import path from "path";
import { HelloWorldServiceHandlers } from "../controller/HelloServicePackage/HelloWorldService";
import * as protoLoader from "@grpc/proto-loader";
import { GRPC_PROTO_FILE } from "../utils/secrets";
import {ProtoGrpcType} from "../controller/hello";
import logger from "../utils/logger";

const server = getServer();
const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, GRPC_PROTO_FILE!));
const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const HelloWorldPackage = grpcObject.HelloServicePackage;

server.addService(HelloWorldPackage.HelloWorldService.service, {
    ServiceHelloWorld:(req :any, res:any)=>{
        logger.info("HelloWorldService added to server");
        console.log(req.request)
        res(null, req.request);
    }
    } as HelloWorldServiceHandlers) ;