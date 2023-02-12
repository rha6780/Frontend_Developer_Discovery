# Frontend/Dockerfile

# pull official base image
FROM node:16.14.1-alpine

# set working directory
WORKDIR .

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npm install react-scripts@4.0.0 -g --silent

COPY src ./src
COPY public ./public

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]

