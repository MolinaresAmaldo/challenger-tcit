const Post = require("../models/post_model.js");
const sequelize = require("../models/sequelize.js");

const seedPosts = async () => {
  const postsData = [
    {
      name: "Introducción a React",
      description:
        "Primer post explicando los fundamentos de React y cómo funcionan los componentes.",
    },
    {
      name: "Guía de Redux",
      description:
        "Cómo manejar el estado global de manera eficiente utilizando Redux Toolkit.",
    },
    {
      name: "Node.js y Express",
      description:
        "Construyendo un backend modular con Express y buenas prácticas de rutas y controladores.",
    },
    {
      name: "Conexión con PostgreSQL",
      description:
        "Ejemplo práctico de cómo conectar Node.js con PostgreSQL utilizando Sequelize.",
    },
    {
      name: "Buenas prácticas en APIs",
      description:
        "Estructura recomendada para servicios REST con códigos HTTP y validaciones.",
    },
    {
      name: "Hooks en React",
      description:
        "Uso de useState, useEffect y cómo crear custom hooks reutilizables.",
    },
    {
      name: "Filtrado local de datos",
      description:
        "Implementación de un filtro en frontend sin llamar nuevamente al backend.",
    },
    {
      name: "Componentes reutilizables",
      description:
        "Cómo construir interfaces limpias mediante componentes reutilizables en React.",
    },
    {
      name: "Estados asíncronos con Redux",
      description:
        "Cómo manejar peticiones HTTP usando createAsyncThunk para un flujo limpio.",
    },
    {
      name: "Deploy de aplicaciones",
      description:
        "Buenas prácticas para desplegar proyectos Node + React en producción.",
    },
  ];

  try {
    //buscamos si ya hay posts en la DB
    const count = await Post.count();
    if (count > 0) {
      console.log("Posts already seeded. Skipping seeding process.");
      return;
    }

    await Post.bulkCreate(postsData);
    console.log("Posts seeded successfully.");
  } catch (error) {
    console.error("Error seeding posts:", error);
  }
};

module.exports = seedPosts;
