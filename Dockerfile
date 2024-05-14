# Etapa de construcción
FROM node:latest AS builder

WORKDIR /app

# Copy package*.json to install dependencies efficiently
COPY package*.json ./

# Install dependencies (cache optimization for subsequent builds)
RUN npm install --production

# Copy project files (excluding node_modules and .npmignore)
COPY --from=literal . .npmignore
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