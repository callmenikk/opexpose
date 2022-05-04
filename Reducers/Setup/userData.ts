export type State = {
  username: string,
  client_id: string,
  avatar: string
}

type Action = {
  type: "FILL_DATA",
  payload: State
}

const defaultState: State = {
  username: "",
  client_id: "",
  avatar: ""
}

export const userDataReducer = (state: State = defaultState, action: Action): State => {
  switch(action.type){
    case "FILL_DATA": {
      return {
        ...action.payload
      }
    }
    default:return state
  }
}