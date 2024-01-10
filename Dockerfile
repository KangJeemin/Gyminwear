FROM node:18-alpine

RUN mkdir -p /kang/vscode/app

WORKDIR /kang/vscode/app

COPY ./gym ./

CMD ["ls"]

RUN npm install 

RUN npm install --global pm2
# EXPOSE 3000
CMD ["ls"]
CMD ["pm2-runtime","start","npm","--","start"]

