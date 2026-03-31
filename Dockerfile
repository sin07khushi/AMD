# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production serve stage using Nginx
FROM nginx:alpine
# Copy built assets to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port (Cloud Run sets the PORT env variable; Nginx default is 80)
EXPOSE 80
# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]