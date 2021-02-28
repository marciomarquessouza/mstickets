FROM node:alpine

WORKDIR /app

COPY package.json .
RUN npx yarn --only=prod
COPY . .

CMD ["npx", "yarn", "start"]