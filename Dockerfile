FROM node:lts-alpine

WORKDIR /app

EXPOSE 5018

COPY package*.json ./

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]
