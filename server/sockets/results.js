const {party} = require("../rooms")

module.exports = (socket) => {
  socket.on("@result", (room_id) => {
    const findParty = party.findIndex(async room => await room.room_id == room_id)

    const firstTarget = party[findParty].targets[0]
    const secondTarget = party[findParty].targets[1]
    
    const targetToken1 = firstTarget.userToken
    const targetToken2 = secondTarget.userToken


    const findFirstVoted = party[findParty].voters.filter(obj => obj.votingTo.client_id === targetToken1)
    const findSecondVoted = party[findParty].voters.filter(obj => obj.votingTo.client_id === targetToken2)

    const participants = party[findParty].online_users.length

    const percentage1 = ((findFirstVoted.length / participants) * 100).toFixed(1)
    const percentage2 = ((findSecondVoted.length / participants)  * 100).toFixed(1)

    if(!party[findParty].visibilty){
      console.log("results are ready")

      return socket.broadcast.emit("@result_done", {
        first_participant: {
          user: {
            client_id: firstTarget.userToken,
            username: firstTarget.username,
            profile_src: firstTarget.profile_src
          },
          percentage: percentage1,
          total_vote: findFirstVoted.length
        },
        second_participant: { 
          user: {
            client_id: secondTarget.userToken,
            username: secondTarget.username,
            profile_src: secondTarget.profile_src
          },
          percentage: percentage2,
          total_vote: findSecondVoted.length
        },
      })
    }
  })    
}        