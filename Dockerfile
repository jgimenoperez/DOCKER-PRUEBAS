FROM node:12.18
WORKDIR /app
COPY package*.json ./
USER root
RUN apt-get update && apt-get install nano
RUN npm install
COPY . .
#CMD [ "node","producer.js" ]