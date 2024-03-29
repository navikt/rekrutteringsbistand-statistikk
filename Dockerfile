FROM ghcr.io/navikt/baseimages/node-express:16

WORKDIR /var

COPY dist/ dist/
COPY server/build server/
COPY server/node_modules server/node_modules

WORKDIR /var/server

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
