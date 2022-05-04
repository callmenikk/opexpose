export type State = {
  mode: "FUNNY" | "SUSSY_BAKA" | "DONT_DO_THAT" | "",
  visibility: boolean
}

type Action = {
  type: "MODE" | "VISIBILITY",
  payload: State["mode"] | boolean
}

const defaultState: State = {
  mode: "",
  visibility: true
}

export const ConfigReducer = (state: State = defaultState, action: Action): State => {
  switch(action.type){
    case "MODE": {
      return {
        ...state,
        mode: action.payload as State["mode"]
      }
    }
    case "VISIBILITY": {
      return {
        ...state,
        visibility: action.payload as boolean
      }
    }
    default: return state
  }
}