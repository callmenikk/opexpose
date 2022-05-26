import { combineReducers } from "redux";
import { userDataReducer } from "./Setup/userData"
import { ConfigReducer } from "./Setup/Config";
import { RoomPrepare } from "./Prepare/RoomPrepare";
import { playground } from "./Playground/playground";
import { resultsReducer } from "./Playground/results";


const bundler = combineReducers({
  userData: userDataReducer,
  configs: ConfigReducer,
  RoomPrepare,
  playground,
  results: resultsReducer
})

export default bundler