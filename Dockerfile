FROM node:lts-alpine

WORKDIR /app

EXPOSE 5018

COPY package*.json ./

RUN npm i

COPY . .

# CMD ["npm", "run", "dev"]


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
