const express = require("express");
const session = require("express-session");
// const cookieParser = require("cookie-parser");

const app = express();
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
