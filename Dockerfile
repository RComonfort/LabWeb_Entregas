FROM  debian:jessie

RUN apt-get update

RUN apt-get install -y curl make g++

RUN curl -SL https://deb.nodesource.com/setup | bash -
RUN  apt-get install -y nodejs

ADD package.json /package.json
RUN npm install

WORKDIR /src

EXPOSE 8082

CMD ["node", "/src/server.js"]
