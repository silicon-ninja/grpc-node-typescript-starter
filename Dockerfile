FROM node:14-alpine3.13
WORKDIR /src
COPY package.json .
RUN npm install
COPY ./src .
CMD npm run dev
EXPOSE 8082