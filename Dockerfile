FROM node:latest

WORKDIR /app

COPY ./gym/package* .

RUN npm install && npm install --global pm2

COPY ./gym ./

CMD ["pm2-runtime","start","npm","--","start"]
# CMD ["npm","run","start"]

