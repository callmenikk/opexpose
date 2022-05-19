const {rooms} = require('../rooms')

module.exports = (socket) => {
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
}