FROM node:24.14.0-alpine

WORKDIR /app

RUN mkdir -p builder

COPY package*.json ./builder/
COPY ./prisma ./builder/prisma
COPY ./language ./builder/language
COPY ./public ./builder/public
COPY ./src ./builder/src
COPY ./next.config.ts ./builder/next.config.ts
COPY ./prisma.config.ts ./builder/prisma.config.ts
COPY ./postcss.config.mjs ./builder/postcss.config.mjs
COPY ./tsconfig.json ./builder/tsconfig.json
COPY ./scripts/docker.sh ./docker.sh
COPY ./scripts/build.sh ./builder/scripts/build.sh

RUN chmod +x ./docker.sh

WORKDIR /app/builder

RUN npm i --verbose
RUN npx next telemetry disable
RUN npx prisma generate

ENTRYPOINT ["/app/docker.sh"]

WORKDIR /app

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

CMD ["node", "server"]