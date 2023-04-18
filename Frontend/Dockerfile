# Iniciamos la imagen
FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

# Configuracion
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80 para HTTP
EXPOSE 8080

# Comando para iniciar el servidor NGINX en modo de primer plano
CMD ["nginx", "-g", "daemon off;"]