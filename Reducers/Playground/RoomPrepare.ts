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
    userToken?: string,
    profile_src?: string,
    username?: string
  }
}

export const RoomPrepare = (state: State = defaultState, action: Action): State => {
  
  switch (action.type) { 
    case "LOAD_ROOM": {
      const {room_id, mode, visibility,owner_id, profile_src, userToken, username} = action.payload
      
      return {
        room_id: room_id!,
        mode: mode!, 
        visibility: visibility!,
        owner_id: owner_id!,
        online_users: [{profile_src: profile_src!, userToken: userToken!, username: username!}]
      }
    }
    default: return state
  }
}