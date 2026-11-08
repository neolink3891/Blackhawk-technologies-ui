# BlackHawk Technologies website (TanStack Start, server-rendered). Served by srvx (Node) on port 4173;
# TLS ends at the ALB, so nothing else runs in front of it.

# --- build: all dependencies, then the production bundle (dist/server + dist/client)
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- runtime: the bundle plus production dependencies only, as the unprivileged `node` user
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4173
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
USER node
EXPOSE 4173
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:4173/ || exit 1
# srvx directly (not through npm), so it's PID 1 and gets ECS's SIGTERM itself.
CMD ["node_modules/.bin/srvx", "--prod", "-s", "../client", "dist/server/server.js"]
