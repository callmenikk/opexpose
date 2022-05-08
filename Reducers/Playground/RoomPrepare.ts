export type State = {
  room_id: string,
  mode: "FUNNY" | "SUSSY_BAKA" | "DONT_DO_THAT" | "",
  visibility: boolean,
  owner_id: string,
  online_users: {
    userToken: string,
    profile_src: string,
    username: string
  }[]
}

const defaultState: State = {
  room_id: "",
  mode: "",
  visibility: false,
  owner_id: "",
  online_users: []
}


type Action = {
  type: "LOAD_ROOM" | "ADD_PLAYER" | "REMOVE_PLAYER",
  payload: {
    room_id?: string,
    mode?: "FUNNY" | "SUSSY_BAKA" | "DONT_DO_THAT",
    visibility?: boolean,
    owner_id?: string,
    online_users?: State["online_users"],
    userToken?: string, 
    profile_src?: string, 
    username?: string
  }
}

export const RoomPrepare = (state: State = defaultState, action: Action): State => {
  
  switch (action.type) { 
    case "LOAD_ROOM": {
      const {room_id, mode, visibility,owner_id, online_users} = action.payload
      
      return {
        room_id: room_id!,
        mode: mode!, 
        visibility: visibility!,
        owner_id: owner_id!,
        online_users: online_users!
      }
    }
    case 'ADD_PLAYER': {
      const {userToken, profile_src, username} = action.payload

      const findUser = state.online_users.some(user => user.userToken === userToken)

      if(findUser) return state

      return {
        ...state,
        online_users: [
          ...state.online_users,
          { 
            userToken: userToken!,
            profile_src: profile_src!,
            username: username!
          }
        ]
      }
    }
    default: return state
  }
}