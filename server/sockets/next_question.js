const { party } = require("../rooms")
const questions = require("../configs/questions.json")

module.exports = (socket) => { 
  socket.on("@next_question", (room_id) => {
    console.log(room_id);
    // const findParty = party.findIndex(async room => await room.room_id == room_id)  
 
    // const randomQuestion = Math.floor(Math.random() * questions[findParty.mode].question.length)
  

    // const prepared = {
    //   ...findRoom,
    //   question: party[findParty].question++,
    //   questionText: questions[findParty.mode].question[randomQuestion],
    //   targets: randomUsers(party[findParty].online_users),
    //   voters: []
    // }   

    // console.log(prepared);

    // party[findParty].targets = prepared.targets
    // party[findParty].voters = prepared.voters
    // party[findParty].questionText = prepared.questionText
    // party[findParty].question++

    // socket.broadcast.emit("@set_next_question", prepared)
  })
}