# Используем официальный образ Node.js 14
FROM node:18-alpine

# устанавливаем простой HTTP-сервер для статики
# RUN npm install -g http-server

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package.json yarn.lock ./

# устанавливаем зависимости проекта и очищаем кеш npm
RUN yarn install --frozen-lockfile && yarn cache clean

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

RUN yarn build

CMD [ "node", "dist/main.js" ]

EXPOSE 8000
