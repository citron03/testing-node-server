const express = require("express");
const session = require("express-session");
const { addUser, findUserByName } = require("./testModel");
// const cookieParser = require("cookie-parser");

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
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/session", function (req, res, next) {
  if (req.session.test) {
    console.log("req.session", req.session);
    req.session.test++;
    res.status(200).json({ message: "Session Ok" });
  } else {
    req.session.test = 1;
    console.log("No Sessions");
    res.status(201).send({ message: "RN_testing_session" });
  }
});

/*
{
  "name": "testman",
  "age": 38,
  "cash": 35000
} 
 */
app.post("/test/add", async (req, res, next) => {
  console.log(req.body);
  const { name, age, cash } = req.body;
  const createdUser = await addUser(name, age, cash);
  res.status(201).send(createdUser);
});

// /test/find/testman
app.get("/test/find/:name", async (req, res, next) => {
  console.log(req.params.name);
  const findUser = await findUserByName(req.params.name);
  res.status(200).send(findUser);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
