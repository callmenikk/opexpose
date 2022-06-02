const { party } = require("../rooms")

module.exports = (socket) => {
  socket.on("@vote",(vote_obj, room_id) => {
    const findParty = party.findIndex(async room => await room.room_id == room_id)
    console.log("request received from:", room_id)

    if (findParty === -1) {
      console.log("party not found");
      return
    }


    const isVoterExist = party[findParty].voters.some(user =>user.voter === vote_obj.voter)

    if (!isVoterExist) {

      const pushObj = {
        voter: vote_obj.voter,
        votingTo: {
          client_id: vote_obj.client_id,
          profile_src: vote_obj.profile_src,
          username: vote_obj.username
        }
      }
      party[findParty].voters.push(pushObj)
      
      const totalVoters = party[findParty].voters.length
      const totalMembers = party[findParty].online_users.length
  
      if (totalVoters === totalMembers) {
        console.log("full capacity");
        socket.broadcast.emit("@resultCallback", "done")
      }
    }
  })
}   