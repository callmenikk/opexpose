import { combineReducers } from "redux";
import { userDataReducer } from "./userData"


const bundler = combineReducers({
  userData: userDataReducer
})

export default bundler