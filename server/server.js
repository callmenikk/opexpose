const express = require("express")
const cors = require("cors")
const app = express()
const http = require("http").createServer(app);
const createRoom = require("./Router/createRoom");
const roomUsage = require("./Usage/roomUsage")
const isRoomExist = require("./Router/isRoomExist")
const { rooms } = require("./rooms")

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
  }
});

io.on("connection", (socket) => {
  socket.on("@port_open", () => {
    socket.broadcast.emit("@response", true)
  })

  socket.on("listen-room", (room) => {
    socket.join(room)
  })

  socket.on("join-room", (room, user_info) => {
    socket.to(room).emit("new_user", user_info)
    const findRoom = rooms.find(async (room) => await room["room_id"] == room)

    const findRoomIndex = rooms.findIndex(async room => await room.room_id === room)
    const isUserExist = findRoom ? findRoom.online_users.some(user => user.userToken === user_info.userToken) : false

    if (!isUserExist) {
      const addUser = 
      {
        userToken: user_info.userToken,
        profile_src: user_info.profile_src,
        username: user_info.username
      }  


      rooms[findRoomIndex].online_users.push(addUser)
    }    
  })

  socket.on("@leave_room", (room_id, client_id) => {
    const findRoom = rooms.find(async (room) =>await room.room_id === room_id)

    if (findRoom == undefined) {
      console.log("Room not found")
      return
    }

    if (findRoom.owner_id !== client_id) {
      const delUserFromRoom = findRoom.online_users.filter(user => user.userToken !== client_id)
      const findRoomIndex = rooms.findIndex(async room => await room.room_id === room_id)

      rooms[findRoomIndex].online_users = delUserFromRoom
      socket.broadcast.emit("@leftUser", client_id)
    }  
    else {
      const findRoomIndex = rooms.findIndex(async room => await room.room_id === room_id)
      rooms.splice(findRoomIndex, 1)
      socket.to(room_id).emit("@room_deleted", "room deleted")
    }
  })
}) 


app.get("/", (req, res) => {
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