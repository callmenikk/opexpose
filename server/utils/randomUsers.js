/**
 * @param {Object[]} roomMembers
 */        

module.exports = (roomMembers) => {
  const user1 = roomMembers[Math.floor(Math.random() * roomMembers.length)]
  const user2Set = roomMembers.filter(user => user.userToken !== user1.userToken)

  const user2 = user2Set[Math.floor(Math.random() * user2Set.length)]

  return [user1, user2]
}       