FROM node:12.22.3-alpine3.14
RUN apk add --no-cache dumb-init=~1.2

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci --only=production

COPY --chown=node:node . /app

USER node

CMD ["dumb-init", "node", "index.js"]