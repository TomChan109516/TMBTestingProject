# Use Node.js LTS image as base
FROM node:18 as build  

 
# Set working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install
 
# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY ./environments/.env.production .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]

