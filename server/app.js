const express = require("express");
const auth = require("./routes/auth");
const adminRoutes = require("./routes/admin");

const cors = require("cors");
require("dotenv").config();
const app = express();

const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

app.set("socketio", io);

app.use(cors());

app.use(express.json());

app.use(auth);
app.use(adminRoutes);

app.listen(2000, () => {
  console.log("Listening on 2000 ");
});
