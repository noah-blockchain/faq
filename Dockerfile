FROM node:lts-alpine as builder
COPY front/ /srv
WORKDIR /srv
RUN set -x \
    && npm install --only=production \
    && npm run build

FROM node:lts-alpine
COPY --from=builder /srv/node_modules /srv/node_modules
COPY --from=builder /srv/build /srv/
ADD front/public /srv/public
WORKDIR /srv
RUN npm -g install serve
EXPOSE 3001
CMD ["serve", "-p", "3001"]