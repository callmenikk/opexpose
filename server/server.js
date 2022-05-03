const express = require("express")
const cors = require("cors")
const app = express()
const http = require("http").createServer(app);

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
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
  socket.on("@port_open", (msg) => {
    socket.broadcast.emit("@response", "STOP!")
    console.log(msg)
  })
})


app.get("/", (req, res) => {
  res.send({
    msg: "succuess"
  })
})

http.listen(port, () => {
  const port = http.address().port;
  console.log("server listening at", port);
});