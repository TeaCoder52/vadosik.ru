FROM oven/bun:1 AS base

WORKDIR /usr/src/app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

FROM oven/bun:1 AS release

COPY --from=base /usr/src/app/node_modules node_modules

COPY . .

RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "preview"]
