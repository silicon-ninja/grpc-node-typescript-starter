import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloWorldServiceClient as _HelloServicePackage_HelloWorldServiceClient, HelloWorldServiceDefinition as _HelloServicePackage_HelloWorldServiceDefinition } from './HelloServicePackage/HelloWorldService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  HelloServicePackage: {
    HelloWorldService: SubtypeConstructor<typeof grpc.Client, _HelloServicePackage_HelloWorldServiceClient> & { service: _HelloServicePackage_HelloWorldServiceDefinition }
    RequestHelloWorld: MessageTypeDefinition
    ResponseHelloWorld: MessageTypeDefinition
  }
}

