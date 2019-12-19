FROM node:lts-alpine
COPY front/ /srv/node
WORKDIR /srv/node
RUN npm -g install serve
RUN npm install
RUN npm run build

EXPOSE 3001
CMD ["serve", "-s", "build", "-p", "3001"]