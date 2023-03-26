import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./Component/Main/main";
import SignUpScreen from "./Component/SignUp/signUp";
import ProfileScreen from "./Component/Profile/profile";

//Lecture 06
//Custom component, Navigation, passing data, image, pressable

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="Sign Up/Login" component={SignUpScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
