import { NativeRouter, Route, Routes } from "react-router-native";
import Setup from "../Components/Setup/Setup";
import { Provider } from "react-redux";
import { setupStyle } from "../Components/Setup/Stylesheet/Setup.style";
import { createStore } from "redux";
import Prepare from "../Components/Prepare/Prepare";
import allReducer from "../Reducers/allReducers";
import JoinCode from "../Components/EnterCode/JoinCode";
import Home from "../Components/Home/Home";

const store = createStore(allReducer);

const Router = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Setup />} />
          <Route path="/joincode" element={<JoinCode />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prepare/:id" element={<Prepare />} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
};

export default Router;
