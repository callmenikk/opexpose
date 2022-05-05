const express = require("express")
const cors = require("cors")
const app = express()
const http = require("http").createServer(app);
const createRoom = require("./Router/createRoom");
const roomUsage = require("./Usage/roomUsage")

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({
  extended: true
}));

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on("@port_open", () => {
    socket.broadcast.emit("@response", true)
    console.log("client connected")
  })
})


app.get("/", (req, res) => {
  res.send({
    msg: "succuess"
  })
})

app.use("/api/v1", createRoom)
app.use("/usage", roomUsage),

http.listen(port, () => {
  const port = http.address().port;
  console.log("server listening at", port);
});