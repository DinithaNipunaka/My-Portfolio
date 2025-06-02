# ---------- STAGE 1: Build React App ----------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (with conflict fix) including bootstrap
RUN npm install --legacy-peer-deps && \
    npm install bootstrap

# Copy all source code
COPY . .

# Build the React app
RUN npm run build

# ---------- STAGE 2: Serve with Nginx ----------
FROM nginx:alpine

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the web
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]