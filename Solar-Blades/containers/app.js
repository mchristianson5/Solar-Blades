import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../views/login";
import Home from "../views/home";
import BladeManager from "../views/bladeManager";

const Stack = createStackNavigator();
const SolarBladesApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BladeManager" component={BladeManager} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default SolarBladesApp;
