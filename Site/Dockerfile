

FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .



ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "run", "dev" ]
