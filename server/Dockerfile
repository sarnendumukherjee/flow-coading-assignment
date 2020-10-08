# Build dist application builder
FROM node:13.8 AS builder

ENV NODE_ENV=development
WORKDIR /opt/app

COPY --chown=node:node .babelrc tsconfig.json package.json yarn.lock /opt/app/
COPY --chown=node:node src/ /opt/app/src/
RUN yarn config set strict-ssl false \
  && yarn install \
  && yarn build

# Build application container
FROM node:13.8

ENV NODE_ENV=production
WORKDIR /opt/app
EXPOSE 8001 8002
ENTRYPOINT ["/usr/local/bin/node"]
CMD ["/opt/app/dist/main.js"]

COPY --from=builder /opt/app/package.json /opt/app/yarn.lock /opt/app/
COPY --from=builder /opt/app/dist/ /opt/app/dist/
RUN yarn config set strict-ssl false \
  && yarn install --non-interactive --frozen-lockfile --production
