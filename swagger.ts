import express from "express";
const router = express.Router();
import path from "path";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// use swagger
const options = {
  swaggerDefinition: {
    info: {
      title: "Swagger API Docs",
      version: "1.0.0",
      description: " Swagger test document ",
    },
    host: "localhost:8080",
    basePath: "/",
  },
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test swagger",
      version: "1.0.0",
    },
  },
  host: "localhost:8080",
  basePath: "/",
  apis: ["./index.ts", path.resolve(__dirname, "./routers/*.ts")],
};
const swaggerSpec = swaggerJsdoc(options); // use swagger-jsdoc

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
