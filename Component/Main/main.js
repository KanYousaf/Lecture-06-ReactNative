import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles_main } from "./mainStyle";

const MainScreen = ({ route, navigation }) => {
  const { firstNameKey, lastNameKey, dateKey } = route.params ?? {};
  // Set the title of Main screen as Welcome instead of Main

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "Welcome",
  //   });
  // }, [navigation]);

  return (
    <View style={styles_main.container}>
      <View style={{ flexDirection: "row", marginTop: 20, height: "15%" }}>
        <Text style={styles_main.title}>Dummy App</Text>
        <Image
          style={styles_main.tinyLogo}
          source={require("../../assets/tinylogo.png")}
        />
      </View>
      <Text style={styles_main.text}>
        Join the community to get connected with people
      </Text>
      {/* Hide the View that contains firstName, lastName and dateOfBirth when it contains null value */}
      {firstNameKey && lastNameKey && dateKey ? (
        <View>
          <Text style={styles_main.text}>
            Hello : {firstNameKey + " " + lastNameKey} {"\n"}
            Your DOB : {dateKey}
          </Text>
        </View>
      ) : null}
      <ScrollView style={styles_main.scrollView}>
        <Text style={{ textAlign: "justify", fontSize: 16, margin: 10 }}>
          As a dummy app is a non-functional prototype app that is created for
          testing, demo, or educational purposes, it does not have any specific
          features. However, here are some of the common features that can be
          included in a dummy app:
          {"\n"}
          {"\n"}
          {"\n"}
          1. Login and registration screen: A screen to allow users to create an
          account and log in to the app.
          {"\n"}
          {"\n"}
          2. User profile: A screen that displays user information and allows
          users to edit their profile.
          {"\n"}
          {"\n"}
          3. Home screen: The main screen of the app that provides quick access
          to other features and functions.
          {"\n"}
          {"\n"}
          4. Navigation: The ability to navigate between screens and features
          within the app.
          {"\n"}
          {"\n"}
          5. Settings: A screen where users can customize their app settings.
          {"\n"}
          {"\n"}
          6. Notifications: Push notifications or in-app notifications to inform
          users of app events and updates.
          {"\n"}
          {"\n"}
          7. Search: A search feature to allow users to find information within
          the app.
          {"\n"}
          {"\n"}
          8. Social media integration: The ability to share app content on
          social media platforms.
          {"\n"}
          {"\n"}
          9. Help and support: A screen that provides users with information
          about the app and how to use it, as well as a way to contact support
          for help.
          {"\n"}
          {"\n"}
          10. About: A screen that provides information about the app, its
          creators, and its purpose.
        </Text>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
