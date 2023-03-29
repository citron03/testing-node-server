const express = require("express");
const session = require("express-session");
// const cookieParser = require("cookie-parser");
const ipRouter = require("./routers/ipRouter");
const sessionRouter = require("./routers/sessionRouter");
const testModelRouter = require("./routers/testModelRouter");
const swaggerDocs = require("./swagger");

const app = express();
app.use(express.json()); // use body
// app.use(cookieParser());
app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: true,
  })
);

const port = 8080;

/**
 * @openapi
 * /:
 *   get:
 *     description: test api
 *     responses:
 *       200:
 *         description: Returns a string.
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// routers
app.use("/", ipRouter);
app.use("/", sessionRouter);
app.use("/test", testModelRouter);

app.use(swaggerDocs);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// use IPv4
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
