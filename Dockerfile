# Stage 1: Build Stage
FROM node:lts-alpine as builder
WORKDIR /app
# Copy package.json and package-lock.json for caching
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .
RUN npm run build

# Stage 2: Production Stage
FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
RUN npm install --production --frozen-lockfile
EXPOSE 3000

CMD ["npm", "start"]
