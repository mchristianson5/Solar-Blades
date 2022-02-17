import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SolarBladesApp from "./containers/app.js";
import Login from "./views/login/index.js";

export default function App() {
  return (
    <>
      <SolarBladesApp />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
