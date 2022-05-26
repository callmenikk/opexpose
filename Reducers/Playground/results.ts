export type ParticipantType = {
  user: {
    client_id: string,
    username: string,
    profile_src: string
  },
  percentage: number,
  total_vote: number
  whoVoted?: {
    username: string,
    profile_src: string
  }[]
}

type State = {
  show: boolean,
  visibility: boolean,
  first_participant: ParticipantType,
  second_participant: ParticipantType,
}

const inital: State = {
  show: false,
  visibility: false,
  first_participant: {
    user: {
      client_id: "",
      username: "",
      profile_src: ""
    },
    percentage: -1,
    total_vote: -1,
    whoVoted: []
  },
  second_participant: {
    user: {
      client_id: "",
      username: "",
      profile_src: ""
    },
    percentage: -1,
    total_vote: -1,
    whoVoted: []
  },
}

type Action = {
  type: "SET_SHOW" | "SET_RESULTS",
  payload: {
    first_participant?: ParticipantType,
    second_participant?: ParticipantType,
    show?: boolean,
    visibility?: boolean
  }
}

export const resultsReducer = (state: State = inital, action: Action): State => {
  switch(action.type){
    case "SET_SHOW": {
      return {
        ...state,
        show: action.payload.show as boolean
      }
    }
    case "SET_RESULTS": {
      return {
        ...state,
        visibility: action.payload.visibility!,
        first_participant: action.payload.first_participant!,
        second_participant: action.payload.second_participant!
      }
    }
    default: return state
  }
}