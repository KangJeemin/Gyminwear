FROM node:18-alpine

RUN mkdir -p /kang/vscode/app

WORKDIR /kang/vscode/app

COPY ./gym ./

RUN npm install 

EXPOSE 3000

CMD ["npm","run","dev"]

