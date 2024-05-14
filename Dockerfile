# Etapa de construcción
FROM node:latest AS builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies efficiently
COPY package*.json ./
COPY .npmignore ./
RUN npm install --production
COPY . .

# Etapa de ejecución
FROM node:18-alpine AS runner

# Set working directory for runtime
WORKDIR /app

# Copy only the required files from builder stage (excluding node_modules)
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app ./

# Run the Remix production server
CMD ["npm", "run", "start"]