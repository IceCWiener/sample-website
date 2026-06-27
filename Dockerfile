# Stage 1: Build the static files
FROM node:24-slim AS build

WORKDIR /app

RUN npm config set strict-ssl false

# Install dependencies (cached layer)
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
