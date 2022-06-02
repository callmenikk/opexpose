const express = require("express")
const cors = require("cors")
const app = express()
const http = require("http").createServer(app);
const createRoom = require("./Router/createRoom");
const roomUsage = require("./Usage/roomUsage")
const connectSocket = require("./sockets/connectSocket")
const isRoomExist = require("./Router/isRoomExist")
const results = require("./sockets/results")
const joinMember = require("./sockets/join_room") 
const listen = require("./sockets/listen")
const leaveRoom = require("./sockets/leave_member")
const startParty = require("./sockets/start_party")
const vote_target = require("./sockets/vote_target") 
const nextQuestion = require('./sockets/next_question')
 
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json({ limit: '20mb' })) 
app.use(express.urlencoded({
  extended: true  
}));
 
const io = require("socket.io")(http, { 
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
  maxHttpBufferSize: 1e8, 
  transports: ['websocket'], 
  pingTimeout: 30000
});

io.on("connection", (socket) => {
  connectSocket(socket)
  listen(socket)
  joinMember(socket)
  leaveRoom(socket)
  startParty(socket)
  vote_target(socket)
  results(socket)
  nextQuestion(socket)
})


app.get("/", (_, res) => {
  res.send({
    msg: "succuess" 
  })
})
 
app.use("/api/v1", createRoom)
app.use("/api/v1", isRoomExist)

app.use("/usage", roomUsage),

  http.listen(port, () => {
    const port = http.address().port;
    console.log("server listening at", port);
  });  