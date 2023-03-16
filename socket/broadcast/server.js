const express = require("express");
const app = express();
const server = app.listen(8050, () => {
  console.log("------------ Start Server");
});

// client1.html, client2.html, client3.html과 통신
const SocketIO = require("socket.io");
const io = SocketIO(server, { path: "/test/socket" }); // client에서 path를 기준으로 연결. 같아야 연결 가능
// path는 /로 시작하는 경로여야 한다.

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("CHAT", (msg) => {
    console.log("client message === ", msg);
  });
  let count = 0;
  socket.on("REQUEST NOTI", (msg) => {
    console.log("broadcasting!!");
    socket.broadcast.emit("PUSH NOTI", `${msg} - count: ${++count}`);
  });
});
