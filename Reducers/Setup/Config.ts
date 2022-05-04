export type State = {
  mode: "FUNNY" | "SUSSY_BAKA" | "DONT_DO_THAT" | "",
  visibility: boolean
}

export type Action = {
  type: keyof State,
  payload: {
    modeConfig: State["mode"],
    visibilityConfig: State["visibility"]
  }
}

const defaultState: State = {
  mode: "",
  visibility: false
}

export const ConfigReducer = (state: State = defaultState, action: Action): State => {
  switch(action.type){
    case "mode": {
      return {
        ...state,
        mode: action.payload.modeConfig
      }
    }
    case "visibility": {
      return {
        ...state,
        visibility: action.payload.visibilityConfig
      }
    }
    default: return state
  }
}