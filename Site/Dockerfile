# # Используем официальный образ Node.js 16
# FROM node:18-alpine

# # Устанавливаем рабочую директорию в /app
# WORKDIR /app

# # Копируем файлы package.json и package-lock.json
# COPY package*.json ./

# # Устанавливаем зависимости
# RUN npm install

# # Копируем остальные файлы
# COPY . .


# # CMD указывает команду, которая будет выполнена при запуске контейнера
# CMD ["npm", "run", "dev"]

# # Бэкенд будет слушать порт 3000
# EXPOSE 3000


# # FROM node:lts-alpine

# # # устанавливаем простой HTTP-сервер для статики
# # RUN npm install -g http-server

# # # делаем каталог 'app' текущим рабочим каталогом
# # WORKDIR /app

# # # копируем оба 'package.json' и 'package-lock.json' (если есть)
# # COPY package*.json ./

# # # устанавливаем зависимости проекта
# # RUN npm install

# # # копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
# # COPY . .

# # # собираем приложение для production с минификацией
# # RUN npm run dev

# # EXPOSE 3000
# # CMD [ "http-server", "dist" ]

FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .



ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
