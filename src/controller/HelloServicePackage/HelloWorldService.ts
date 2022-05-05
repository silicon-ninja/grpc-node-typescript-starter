// Original file: src/protos/hello.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { RequestHelloWorld as _HelloServicePackage_RequestHelloWorld, RequestHelloWorld__Output as _HelloServicePackage_RequestHelloWorld__Output } from '../HelloServicePackage/RequestHelloWorld';
import type { ResponseHelloWorld as _HelloServicePackage_ResponseHelloWorld, ResponseHelloWorld__Output as _HelloServicePackage_ResponseHelloWorld__Output } from '../HelloServicePackage/ResponseHelloWorld';

export interface HelloWorldServiceClient extends grpc.Client {
  ServiceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  ServiceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  ServiceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  ServiceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  serviceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  serviceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, metadata: grpc.Metadata, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  serviceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, options: grpc.CallOptions, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  serviceHelloWorld(argument: _HelloServicePackage_RequestHelloWorld, callback: grpc.requestCallback<_HelloServicePackage_ResponseHelloWorld__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloWorldServiceHandlers extends grpc.UntypedServiceImplementation {
  ServiceHelloWorld: grpc.handleUnaryCall<_HelloServicePackage_RequestHelloWorld__Output, _HelloServicePackage_ResponseHelloWorld>;
  
}

export interface HelloWorldServiceDefinition extends grpc.ServiceDefinition {
  ServiceHelloWorld: MethodDefinition<_HelloServicePackage_RequestHelloWorld, _HelloServicePackage_ResponseHelloWorld, _HelloServicePackage_RequestHelloWorld__Output, _HelloServicePackage_ResponseHelloWorld__Output>
}
