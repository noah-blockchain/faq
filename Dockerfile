FROM node:lts-alpine
COPY ./front /srv/node
WORKDIR /srv/node
RUN set -x \
    && npm install

EXPOSE 3000
CMD ["npm", "run", "start"]