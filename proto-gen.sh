#!/bin/bash
yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/controller/ src/protos/*.proto