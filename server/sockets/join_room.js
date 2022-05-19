const {rooms} = require('../rooms')

module.exports = (socket) => {
  socket.on("join-room", (room, user_info) => {
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
      socket.to(room).emit("new_user", user_info)
    }    
  })
}