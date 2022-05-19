module.exports = (socket) => {
  socket.on("listen-room", (room) => {
    socket.join(room)
  })
}