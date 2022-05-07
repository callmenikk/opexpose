import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Router from "./Router/Router";


const App = () => {

  useEffect(() => {
    StatusBar.setBarStyle('light-content',true)
    StatusBar.setBackgroundColor("#000")
  }, [])

  return (
      <SafeAreaView>
        <Router />
      </SafeAreaView>
  );
}

export default App