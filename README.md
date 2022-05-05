# gRPC Typescript Starter

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

```This repository contains the starter template for backend server using node & grpc written in typescript for production and local development. ```

```
   ░██████╗░██████╗░██████╗░░█████╗░  ░██████╗████████╗░█████╗░██████╗░████████╗███████╗██████╗░
   ██╔════╝░██╔══██╗██╔══██╗██╔══██╗  ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
   ██║░░██╗░██████╔╝██████╔╝██║░░╚═╝  ╚█████╗░░░░██║░░░███████║██████╔╝░░░██║░░░█████╗░░██████╔╝
   ██║░░╚██╗██╔══██╗██╔═══╝░██║░░██╗  ░╚═══██╗░░░██║░░░██╔══██║██╔══██╗░░░██║░░░██╔══╝░░██╔══██╗
   ╚██████╔╝██║░░██║██║░░░░░╚█████╔╝  ██████╔╝░░░██║░░░██║░░██║██║░░██║░░░██║░░░███████╗██║░░██║
   ░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░░╚════╝░  ╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
```
----
## </b>Local Deployment</b>
### Step 1 : To install all the dependencies
 
 ```bash
 npm install
 ```
### Step 2 : To set .env variables on a Linux machine or a UNIX machine
 
 ```bash
 export $(cat .env | xargs)
 ```
### Step 3 : To run the Server in devlopment mode
 
 ```bash
 npm run dev
 ```

### Step 3 : To run the Server in production mode
 
 ```bash
 npm start
 ```
---
## <b>Production Deployment using Docker</b>

```csharp
Note :'Dont Forget to add your env variables.'
```
### Step 1 : Build your Docker image by running the following command 
```bash
docker build -t <your-project-name> .
```

### Step 2 : Run your Docker image by running the following command 
```bash
docker run -p <project-port>:<mapping-port> <your-project-name>
```
----
© 2022 Silicon Ninja
