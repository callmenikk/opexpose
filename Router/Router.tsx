import { NativeRouter, Route, Routes } from "react-router-native";
import Setup from "../Components/Setup/Setup";


const Router = () => {
   return (
    <NativeRouter>
        <Routes>
            <Route path="/" element={<Setup />} />
        </Routes>
    </NativeRouter>
   )
}

export default Router