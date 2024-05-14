# Utiliza una imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Copia los archivos de construccion al directorio de trabajo en el contenedor
COPY build /usr/src/app/build

# Instala las dependencias del proyecto utilizando npm o yarn
RUN npm install 

RUN npm run build

CMD ["npm", "start"]