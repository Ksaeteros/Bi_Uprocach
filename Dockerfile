# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package*.json to install dependencies efficiently
COPY package*.json ./

# Install dependencies (cache optimization for subsequent builds)
RUN npm install --production

# Run Remix build command (ensure it's in your package.json scripts)
RUN remix-serve build

# (Optional) Specify build directory if it's not /app/build
# If Remix uses a different default build directory, adjust the path here
COPY --from=builder /app/build /app/build

# Runtime stage
FROM node:18-alpine AS runner

# Set working directory for runtime
WORKDIR /app

# Copy only the required files from builder stage (excluding node_modules)
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app ./

# Run the Remix production server
CMD ["npm", "run", "start"]