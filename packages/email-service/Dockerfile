FROM node:10.13.0-slim

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN mkdir -p /usr/src/app
RUN npm install pm2 -g

WORKDIR /usr/src/app
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app
RUN yarn --pure-lockfile

COPY . /usr/src/app

CMD [ "pm2-runtime", "process.json" ]