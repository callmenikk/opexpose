import { NativeRouter, Route, Routes } from "react-router-native";
import Setup from "../Components/Setup/Setup";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducer from "../Reducers/allReducers";
import Home from "../Components/Home/Home";

const store = createStore(allReducer);

const Router = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Setup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NativeRouter>
    </Provider>
  );
};

export default Router;
