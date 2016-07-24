FROM mhart/alpine-node:base-6
MAINTAINER Dominic Barnes <dominic@dbarnes.info>

WORKDIR /src
COPY . /src

EXPOSE 8636
ENTRYPOINT node server/index.js
