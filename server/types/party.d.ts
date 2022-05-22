import { OnlineUsersType } from "./room"

export type PartyType = {
  room_id: number,
  mode: string,
  visibility: boolean,
  owner_id: string,
  online_users: OnlineUsersType[],
  question: number,
  questionText: string,
  targets: [OnlineUsersType,  OnlineUsersType],
  voters:  {
    voter: string,
      votingTo: {
        client_id: string,
        profile_src: string,    
        username: string 
      }
  }
}