FROM navikt/node-express:14-alpine

WORKDIR /app

COPY build/ build/
COPY server/ server/

EXPOSE 3000
ENTRYPOINT ["node", "server/server.js"]