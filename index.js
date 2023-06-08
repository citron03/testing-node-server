const express = require("express");
const session = require("express-session");
// const cookieParser = require("cookie-parser");
const ipRouter = require("./routers/ipRouter");
const sessionRouter = require("./routers/sessionRouter");
const testModelRouter = require("./routers/testModelRouter");
const templateRouter = require("./routers/templateRouter");
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
// app.use(express.static("static")); // static 폴더의 정적 파일
app.use("/static", express.static("static")); // /static 가상 경로 사용하기
// http://localhost:8080/static/mountains.jpg 경로를 통해서 이미지에 접근할 수 있다.

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

// ejs 설정
app.set("view engine", "ejs"); // 원하는 엔진을 템플릿 엔진으로 사용하기 위한 설정
app.set("views", "./views"); // view 파일들이 모여있는 폴더 지정

// routers
app.use("/", ipRouter);
app.use("/", sessionRouter);
app.use("/test", testModelRouter);
app.use("/template", templateRouter);

app.use(swaggerDocs);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// use IPv4
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
