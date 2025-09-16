# Use official Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for dependency caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build frontend for production
RUN npm run build

# Use a lightweight server to serve build (optional)
# Install serve globally
RUN npm install -g serve

# Command to serve the built frontend
CMD ["serve", "-s", "build", "-l", "3000"]
