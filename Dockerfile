# --- Stage 1: Build the Client (Vite/React) ---
FROM node:22-bookworm-slim AS client-build
WORKDIR /app/client

# Copy client dependencies and install
COPY client/package*.json ./
RUN npm install --no-audit --no-fund

# Copy client source code and build production assets
COPY client/ ./
RUN npm run build

# --- Stage 2: Production Runtime ---
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy root package.json and install production dependencies
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

# Copy backend application code from root
COPY . .

# Copy built frontend assets from Stage 1 into client/dist
COPY --from=client-build /app/client/dist ./client/dist

# Expose server port (تأكد من أن المنفذ يطابق المنفذ المستخدم في server.js)
EXPOSE 5100

USER node

# إضافة فحص صحة التطبيق
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5100/health || exit 1

# Start the Express server
CMD ["node", "server.js"]