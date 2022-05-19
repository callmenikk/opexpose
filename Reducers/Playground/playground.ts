type TargetType = {
  userToken: string,
  profile_src: string,
  username: string
}

export type State = {
  questions: string,
  owner_id: string,
  questionNumber: number,
  targets: [TargetType, TargetType],
}

type Action = {
  type: "SET_QUESTION",
  payload: State
}

const initalState: State = {
  questions: "",
  owner_id: "",
  questionNumber: 1,
  targets: [
    {
      userToken: "",
      profile_src: "",
      username: ""
    },
    {
      userToken: "",
      profile_src: "",
      username: ""
    },
  ]
}


export const playground = (state: State = initalState, action: Action): State => {
  switch (action.type) {
    case "SET_QUESTION": {
      return {
        owner_id: action.payload.owner_id,
        questions: action.payload.questions,
        targets: action.payload.targets,
        questionNumber: action.payload.questionNumber
      }
    }
    default: return state
  }
}