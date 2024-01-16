FROM node:18-alpine

WORKDIR /

COPY ./gym/package*.json ./

COPY ./gym/ ./

RUN npm install && \ 
    npm install --global pm2

EXPOSE 3000

CMD ["pm2-runtime","start","npm","--","start"]

