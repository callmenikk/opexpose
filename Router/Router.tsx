import { NativeRouter, Route, Routes } from "react-router-native";
import Setup from "../Components/Setup/Setup";
import { Provider } from "react-redux";
import Playground from "../Components/Playground/Playground";
import { createStore } from "redux";
import Prepare from "../Components/Prepare/Prepare";
import allReducer from "../Reducers/allReducers";
import JoinCode from "../Components/EnterCode/JoinCode";
import Settings from "../Components/Settings/Settings";
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
          <Route path="/playground/:id" element={<Playground />} />
          <Route path="/prepare/:id" element={<Prepare />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
};

export default Router;
