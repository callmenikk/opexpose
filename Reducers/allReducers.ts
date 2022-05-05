import { combineReducers } from "redux";
import { userDataReducer } from "./Setup/userData"
import { ConfigReducer } from "./Setup/Config";
import { RoomPrepare } from "./Playground/RoomPrepare";


const bundler = combineReducers({
  userData: userDataReducer,
  configs: ConfigReducer,
  RoomPrepare
})

export default bundler