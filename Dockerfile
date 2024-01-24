FROM node:latest

WORKDIR /app

COPY ./gym/package* .

RUN npm install

COPY ./gym ./

ARG NEXT_PUBLIC_IP=강지민

# CMD ["pm2-runtime","start","npm","--","start"]
CMD ["npm","run","start"]

