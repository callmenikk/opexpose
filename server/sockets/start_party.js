const { rooms, party } = require("../rooms")
const questions = require("../configs/questions.json")
const randomUsers = require("../utils/randomUsers")

module.exports = (socket) => {
  socket.on("@start_party", (room_id, owner_id) => {
    const findRoom = rooms.find(async room => await room.room_id === room_id)
  
    if (findRoom.owner_id !== owner_id) {
      return socket.to(room_id).emit("@error", "no perms")
    }

    const randomQuestion = Math.floor(Math.random() * questions[findRoom.mode].question.length)
    
    const findRoomIndex = rooms.findIndex(async room => await room.room_id === room_id)
    rooms.splice(findRoomIndex, 1)

    const prepared = {
      ...findRoom,
      questionText: questions[findRoom.mode].question[randomQuestion],
      targets: randomUsers(findRoom.online_users),
      voters: []
    }   

    party.push(prepared)
    socket.to(room_id).emit("@started", prepared)
  })
}