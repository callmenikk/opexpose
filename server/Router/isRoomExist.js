const router = require("express").Router()
const { rooms } = require("../rooms")
const { max_users } = require("../configs/gameConfigs")

router.get("/room_id/:id", (req, res) => {
  const { id } = req.params
  const roomId = id.trim()

  if (roomId.toString().length !== 6) {
    return res.status(403).send({
      err: "Invalid type of room id"
    })
  }

  const checkRoomExist = rooms.some(room => room.room_id === roomId)

  if (!checkRoomExist) {
    return res.status(404).send({
      err: "Room Not Found"
    })
  }

  const foundRoom = rooms.find(room => room.room_id === roomId)

  if (foundRoom.online_users.length === max_users) {
    return res.status(403).send({
      err: "room is full"
    })
  }

  return res.send({
    success: true,
    room_id: foundRoom.room_id,
    mode: foundRoom.mode,
    visibility: foundRoom.visibility,
    owner_id: foundRoom.owner_id,
    online_users: foundRoom.online_users,

  })
})

module.exports = router