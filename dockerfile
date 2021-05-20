FROM node:14.16.1

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

CMD [ "node", "app.js" ]