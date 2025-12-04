# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Solo package*.json primero para aprovechar cache
COPY backend/package*.json ./
RUN npm install

# Ahora copiamos el código
COPY backend ./

EXPOSE 3000

# Usa el script que tengas definido (dev / start)
CMD ["npm", "run", "start"]
