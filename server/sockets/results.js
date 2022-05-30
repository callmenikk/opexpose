const { party } = require("../rooms")

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
    const percentage2 = ((findSecondVoted.length / participants) * 100).toFixed(1)

    if (!party[findParty].visibility) {
      const firstParticipantData = {
        user: {
          username: firstTarget.username,
          profile_src: firstTarget.profile_src
        },
        percentage: percentage1,
        total_vote: findFirstVoted.length
      }

      const secondParticipantData = {
        user: {
          username: secondTarget.username,
          profile_src: secondTarget.profile_src
        },
        percentage: percentage2,
        total_vote: findSecondVoted.length
      }

      socket.broadcast.emit("@result_done", {
        visibility: party[findParty].visibility,
        first_participant: firstParticipantData,
        second_participant: secondParticipantData
      })
    } else {

      let firstVoters = []
      let secondVoters = []

      for (let i = 0; i < findFirstVoted.length; i++) {
        const whoIsVoter = party[findParty].online_users.find(user => user.userToken === findFirstVoted[i].voter)

        firstVoters.push({
          username: whoIsVoter.username,
          profile_src: whoIsVoter.profile_src
        })
      }

      for (let i = 0; i < findSecondVoted.length; i++) {
        const whoIsVoter = party[findParty].online_users.find(user => user.userToken === findSecondVoted[i].voter)
        secondVoters.push({
          username: whoIsVoter.username,
          profile_src: whoIsVoter.profile_src
        })
      }

      socket.broadcast.emit("@result_done", {
        visibility: party[findParty].visibility,
        first_participant: {
          user: {
            username: firstTarget.username,
            profile_src: firstTarget.profile_src
          },
          whoVoted: firstVoters,
          total_vote: findFirstVoted.length
        },
        second_participant: {
          user: {
            username: secondTarget.username,
            profile_src: secondTarget.profile_src
          },
          whoVoted: secondVoters,
          total_vote: findSecondVoted.length
        },
      })


    }



  })
}
