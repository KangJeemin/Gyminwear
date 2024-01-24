FROM node:latest

WORKDIR /app

COPY ./gym/package* .

RUN npm install

COPY ./gym ./

# ARG NEXT_PUBLIC_DATABASE_USERNAME
# ARG NEXT_PUBLIC_DATABASE_PASSWAOD 
# ARG NEXT_PUBLIC_DATABASE_PORT
# ARG NEXT_PUBLIC_DATABASE_HOST
# ARG NEXT_PUBLIC_DATABASE_DATABASE
# ARG NEXT_PUBLIC_IRON_SESSION_PASSWORD
ARG IP
# ARG AWS_BUCKET_NAME
# ARG AWS_REGION

# ENV NEXT_PUBLIC_DATABASE_USERNAME ${NEXT_PUBLIC_DATABASE_USERNAME}
# ENV NEXT_PUBLIC_DATABASE_PASSWAOD ${NEXT_PUBLIC_DATABASE_PASSWAOD}
# ENV NEXT_PUBLIC_DATABASE_PORT ${NEXT_PUBLIC_DATABASE_PORT}
# ENV NEXT_PUBLIC_DATABASE_HOST ${NEXT_PUBLIC_DATABASE_HOST}
# ENV NEXT_PUBLIC_DATABASE_DATABASE ${NEXT_PUBLIC_DATABASE_DATABASE}
# ENV NEXT_PUBLIC_IRON_SESSION_PASSWORD ${NEXT_PUBLIC_IRON_SESSION_PASSWORD}
ENV NEXT_PUBLIC_IP ${IP}
# ENV AWS_BUCKET_NAME ${AWS_BUCKET_NAME}
# ENV AWS_REGION ${AWS_REGION}

# CMD ["pm2-runtime","start","npm","--","start"]
CMD ["npm","run","start"]

