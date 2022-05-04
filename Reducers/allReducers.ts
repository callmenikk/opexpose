import { combineReducers } from "redux";
import { userDataReducer } from "./Setup/userData"
import { ConfigReducer } from "./Setup/Config";


const bundler = combineReducers({
  userData: userDataReducer,
  configs: ConfigReducer
})

export default bundler