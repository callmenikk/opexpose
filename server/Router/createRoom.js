const router = require("express").Router()
const { rooms } = require("../rooms")

router.post("/createRoom", (req, res) => {
  const { userToken, profile_src, username, mode, visibility } = req.body
  const room_id = new Date().getTime().toString().slice(7)

  if (userToken == null || profile_src == null || username == null || mode == null || visibility == null) {
    return res.status(403).send({
      err: "Invalid Arguments"
    })
  }

  rooms.push({
    room_id,
    mode,
    visibility,
    owner_id: userToken,
    online_users: [{ userToken, profile_src, username }],
    question: 1
  })

  res.send({
    room_id,
    mode,
    visibility,
    owner_id: userToken,
    online_users: [{ userToken, profile_src, username }],
  })
})


module.exports = router