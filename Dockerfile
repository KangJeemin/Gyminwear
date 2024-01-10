FROM node:18-alpine

RUN mkdir -p /kang/vscode/app

WORKDIR /kang/vscode/app

COPY ./gym ./

RUN npm install 

RUN npm install --global pm2

EXPOSE 3000


CMD ["pm2-runtime","start","npm","--","start"]

