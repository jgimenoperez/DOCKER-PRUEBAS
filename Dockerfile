FROM node:12.18
WORKDIR /app
COPY package*.json ./
USER root
RUN apt-get update && apt-get install nano
RUN npm install
#RUN npm install -g pm2
COPY . .
#RUN pm2 start producer.js
#1
#CMD [ "node","producer.js" ]
#docker build -t node_zmq .