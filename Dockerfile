FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./gym/package*.json ./

RUN npm install 

COPY ./gym/ ./

EXPOSE 3000

CMD ["pm2-runtime","start","npm","--","start"]
