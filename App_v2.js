import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function SignUpLoginScreen({ navigation }) {
  const [data, setData] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up/Login Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", { data })}
      />
      <TextInput
        placeholder="Enter data"
        onChangeText={(text) => setData(text)}
        value={data}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <Text>Data passed from Sign Up/Login Screen: {data}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SignUpLogin" component={SignUpLoginScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
