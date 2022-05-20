const { party } = require("../rooms")

module.exports = (socket) => {
  socket.on("@vote", (vote_obj, room_id) => {  
    const findParty = party.findIndex(async room => await room.room_id == room_id)

    if (findParty === -1) {
      console.log("party not found");
      return
    }    

    const isVoterExist = party[findParty].voters.some(user => user.voter === vote_obj.voter)

    if(isVoterExist){
      console.log("Already voted", vote_obj.voter)
      return
    }

    const pushObj = {
      voter: vote_obj.voter,
      votingTo: {
        client_id: vote_obj.client_id,
        // profile_src: vote_obj.profile_src,    
        username: vote_obj.username
      }
    }
    party[findParty].voters.push(pushObj)
    console.log(party[findParty].voters.length);
  })
}