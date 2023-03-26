import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles_profile } from "./profileStyle";

const ProfileScreen = ({ route, navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatepicker, setShowDatePicker] = useState(false);

  const [nameError, setNameError] = useState("");

  const handleSendingDataBack = () => {
    if (firstName.trim() === "" || lastName.trim() === "") {
      setNameError("Please Enter data");
    } else {
      navigation.navigate("Main", {
        firstNameKey: firstName,
        lastNameKey: lastName,
        dateKey: date.toLocaleDateString(),
      });
    }
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  //use route to receive email address from SignUp
  const { email_key } = route.params ?? {};
  return (
    <View style={styles_profile.container}>
      <Text>Email: {email_key}</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles_profile.inputContainer}
          placeholder="First Name"
          value={firstName}
          onChangeText={(value) => {
            setFirstName(value);
          }}
          onFocus={() => {
            setNameError("");
          }}
        />
        <TextInput
          style={styles_profile.inputContainer}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(value) => {
            setLastName(value);
          }}
          onFocus={() => {
            setNameError("");
          }}
        />
      </View>
      {nameError !== "" && (
        <Text style={styles_profile.error}>{nameError}</Text>
      )}
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {showDatepicker && (
        <View>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
          />
          {Platform.OS === "ios" && (
            <Button title="Done" onPress={() => setShowDatePicker(false)} />
          )}
        </View>
      )}
      <Text style={{ margin: 20 }}>Selected Date: {date.toString()}</Text>
      <Pressable style={styles_profile.button} onPress={handleSendingDataBack}>
        <Text style={styles_profile.buttonText}>SHARE</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
