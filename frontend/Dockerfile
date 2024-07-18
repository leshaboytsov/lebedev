

FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

ENV NODE_ENV=production

RUN yarn build

ENV HOST=0.0.0.0

EXPOSE 3000

CMD [ "yarn", "start" ]
