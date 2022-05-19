export type OnlineUsersType = { 
  userToken: string,
  profile_src: string, 
  username: string 
}


export type RoomType = {
  room_id: number,
  mode: string,
  visibility: boolean,
  owner_id: string,
  online_users: OnlineUsersType[],
  question: number,
} 