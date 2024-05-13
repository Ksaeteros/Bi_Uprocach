# Utiliza una imagen oficial de Node.js como base
FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de la aplicación al contenedor
COPY . .

# Instala las dependencias del proyecto utilizando npm o yarn
RUN npm install

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 4444

# Comando para ejecutar la aplicación
CMD ["npm", "start"]