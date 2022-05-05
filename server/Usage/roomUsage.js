const router = require("express").Router()
const rooms = require("../rooms")

router.get("/room", (req, res) => {
  res.send({ room_count: rooms.length || 0})
})

module.exports = router