# Frontend/Dockerfile

# pull official base image
FROM node:16.14.1-alpine

# set working directory
RUN mkdir -p /Frontend_Developer_Discovery
WORKDIR ./Frontend_Developer_Discovery

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /Frontend_Developer_Discovery
RUN npm ci --legacy-peer-deps
RUN npm install react-scripts@4.0.0 -g --silent

COPY . /Frontend_Developer_Discovery

# RUN npm run build
EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
