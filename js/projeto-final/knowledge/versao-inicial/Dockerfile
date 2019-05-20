FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm i -g knex

COPY . ./

EXPOSE 3000

CMD ./scripts/start.sh