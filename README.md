# 🚀 CHALLENGER TCIT – Fullstack App (Dockerized)

Aplicación Fullstack completamente empaquetada con **Docker**, compuesta por:

- **Frontend:** React + Vite + Redux Toolkit
- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL 16
- **Adminer:** GUI para gestionar la base de datos

Este proyecto está listo para ejecutarse con un solo comando usando Docker.

---

## 📁 Estructura del proyecto

```txt
.
├── backend/
│   ├── src/
│   ├── .env              # Variables locales (sin Docker)
│   ├── .env.docker       # Variables para backend dentro de Docker
│   ├── Dockerfile
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── docker-compose.yml
└── .env                  # Variables globales para PostgreSQL (Docker)

```

---

## 🚀 Cómo ejecutar la aplicació

1. Clona este repositorio:
   ```bash
   git clone
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd challengerTCIT
   ```
3. Construye y levanta los contenedores Docker:
   ```bash
   docker-compose up --build
   ```
4. Accede a la aplicación frontend en tu navegador:
   ```
   http://localhost:5173
   ```
5. Accede a Adminer para gestionar la base de datos:
   ```
   http://localhost:8080
   ```

---

## ⚙️ Configuración de variables de entorno

- **Backend:** Configura las variables en `backend/.env.docker`.
- **Base de datos:** Configura las variables en el archivo `.env` en la raíz del proyecto.

---

## 🛠️ Tecnologías utilizada

- **Frontend:** React, Vite, Redux Toolkit
- **Backend:** Node.js, Express
- **Base de datos:** PostgreSQL 16
- **Contenedores:** Docker, Docker Compose

```

---

---

🖥️ Ejecutar sin Docker (opcional)

Si prefieres ejecutar el proyecto sin Docker, también es posible.

1. Backend sin Docker

Asegúrate de tener PostgreSQL instalado localmente y que los valores de backend/.env apunten a tu instancia local.

cd backend
npm install
npm run start

Servidor:

http://localhost:3000

2. Frontend sin Docker
   cd frontend
   npm install
   npm run dev

Aplicación:

http://localhost:5173

Si lo ejecutas sin Docker, asegúrate de que Axios use el backend local, por ejemplo:

// src/api/axios.js (modo local sin Docker)
// const api = axios.create({
// baseURL: "http://localhost:3000/api",
// });

Y vuelve a baseURL: "/api" cuando uses Docker.
```
