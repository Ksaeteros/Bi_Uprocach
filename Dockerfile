# Utiliza una imagen oficial de Node.js como base para la etapa de construcción
FROM node:latest AS builder

# Establece el directorio de trabajo para la etapa de construcción
WORKDIR /app

# Instala las dependencias (optimización de caché para construcciones posteriores)
RUN npm install --production

# Copia los archivos restantes del proyecto (excluyendo node_modules y otros archivos según .dockerignore)
COPY . .

# Cambia a una imagen más ligera de Node.js para la etapa de ejecución
FROM node:18-alpine AS runner

# Establece el directorio de trabajo para la etapa de ejecución
WORKDIR /app

# Copia solo los archivos necesarios de la etapa de construcción (excluyendo node_modules)
COPY --from=builder /app/node_modules ./node_modules

# Copia los archivos restantes del proyecto (excluyendo node_modules)
COPY . .

# Ejecuta el servidor de producción de Remix
CMD ["npm", "run", "start"]