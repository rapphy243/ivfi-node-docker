FROM node:20-alpine

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

RUN chown -R node:node /home/node/app && mkdir -p /home/node/app/files

COPY --chown=node:node run.js ./

USER node

EXPOSE 4000

CMD [ "node", "run.js" ]