module.exports = (socket) => {
  socket.on("@port_open", () => {
    socket.broadcast.emit("@response", true)
  })
}