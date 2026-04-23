# Usa Node 20 (compatible con simple-xml-to-json)
FROM node:20

# Crea directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json primero para aprovechar cache
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Compila con TypeScript usando npx
RUN npx tsc

# Arranca la aplicación
CMD ["npm", "start"]
