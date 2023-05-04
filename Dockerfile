FROM node:16

LABEL version="1.0"
LABEL description="Chat app"
LABEL maintainer="aleksanderlamkov@gmail.com"

WORKDIR /app
COPY . .

RUN yarn install

EXPOSE 3000

CMD yarn run serve
