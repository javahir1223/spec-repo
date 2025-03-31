const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Clinic API",
      version: "1.0.0",
      description: "API for CRUD with students, teachers, calendar, projects",
    },
    servers: [
      {
        url: "https://spec-repo-1-ez1e.onrender.com",
      },
    ],
    tags: [
      { name: "Auth" },
      { name: "Students" },
      { name: "Teachers" },
      { name: "Calendar" },
      { name: "Projects" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./docs/*.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
