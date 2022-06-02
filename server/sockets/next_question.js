const { party } = require("../rooms")
const questions = require("../configs/questions.json")
const randomUsers = require("../utils/randomUsers")

module.exports = (socket) => { 
  socket.on("@next_question", (room_id) => { 
    const partyIndex = party.findIndex(async room => await room.room_id == room_id)  
    const partyRoom = party[partyIndex] 
  
    const randomQuestion = Math.floor(Math.random() * questions[partyRoom.mode].question.length)

    const prepared = {
      ...partyRoom, 
      question: ++party[partyIndex].question,
      questionText: questions[partyRoom.mode].question[randomQuestion],
      targets: randomUsers(party[partyIndex].online_users),
      voters: []
    }   

    party[partyIndex].targets = prepared.targets
    party[partyIndex].voters = []
    party[partyIndex].questionText = prepared.questionText
    party[partyIndex].question++

    socket.broadcast.emit("@set_next_question", prepared)
  })
}  