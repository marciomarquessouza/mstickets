FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npx yarn
COPY . .

CMD ["npx", "yarn", "start"]