# Use a specific Node.js version (adjust as needed)
FROM node:18-alpine AS builder

# Set working directory for build stage
WORKDIR /

# Copy package.json and package-lock.json to install dependencies efficiently
COPY package*.json ./

# Install dependencies (cache optimization for subsequent builds)
RUN npm install --production

# Copy project files (excluding node_modules and .npmignore)
COPY . .

# Switch to a slimmer Node.js image for runtime
FROM node:18-alpine AS runner

# Set working directory for runtime
WORKDIR /app

# Copy only the required files from builder stage (excluding node_modules)
COPY --from=builder /app/node_modules /app/node_modules

# Copy project files (excluding node_modules and .npmignore)
COPY --from=builder . .

# Run the Remix production server
CMD ["npm", "start"]