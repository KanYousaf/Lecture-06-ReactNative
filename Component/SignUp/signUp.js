import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import { style_signup } from "./signUpStyle";

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validDomainNames = ["yahoo.com", "gmail.com", "uettaxila.edu.pk"];
    const domain = email.split("@")[1];

    if (!regex.test(email)) {
      setEmailError("Please enter valid email address");
      return false;
    }

    if (!validDomainNames.includes(domain)) {
      setEmailError("Please enter valid domain");
      return false;
    }

    return true;
  };
  const isValidPassword = (password, confirmPassword) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password === confirmPassword) {
      if (!passwordRegex.test(password)) {
        setPasswordError(
          "Please enter password with atleast 8 characters, 1 uppercase letter, 1 number and 1 special case letter"
        );
        return false;
      }
    } else {
      setConfirmPasswordError("Password and confirm password donot match");
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setEmailError("Please enter your email, password and confirm password");
      setSuccessMessage("");
    } else {
      if (isValidEmail(email) && isValidPassword(password, confirmPassword)) {
        // setSuccessMessage("Successfully entered data");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        navigation.navigate("Profile", { email_key: email });
      }
    }
  };

  return (
    <View style={style_signup.container}>
      <Text style={style_signup.title}>Sign-Up</Text>
      <Text style={style_signup.title}>It's quick and easy</Text>
      <View style={style_signup.container_signup}>
        <TextInput
          style={style_signup.inputContainer}
          placeholder="Enter your e-mail"
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
          onFocus={() => {
            setEmailError("");
          }}
        />
        {emailError !== "" && (
          <Text style={style_signup.error}>{emailError}</Text>
        )}
        <View style={style_signup.inputContainer}>
          <TextInput
            style={style_signup.input}
            placeholder="Enter your password"
            secureTextEntry={hidePassword}
            value={password}
            onChangeText={(value) => {
              setPassword(value);
            }}
            onFocus={() => {
              setPasswordError("");
            }}
          />
          <Pressable
            style={style_signup.iconContainer}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Text style={style_signup.hideShowButtonText}>
              {hidePassword ? "Show" : "Hide"}
            </Text>
          </Pressable>
        </View>
        {passwordError !== "" && (
          <Text style={style_signup.error}>{passwordError}</Text>
        )}
        <View style={style_signup.inputContainer}>
          <TextInput
            style={style_signup.input}
            placeholder="Confirm your password"
            secureTextEntry={hideConfirmPassword}
            value={confirmPassword}
            onChangeText={(value) => {
              setConfirmPassword(value);
            }}
            onFocus={() => {
              setConfirmPasswordError("");
            }}
          />
          <Pressable
            style={style_signup.iconContainer}
            onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
          >
            <Text style={style_signup.hideShowButtonText}>
              {hideConfirmPassword ? "Show" : "Hide"}
            </Text>
          </Pressable>
        </View>
        {confirmPasswordError !== "" && (
          <Text style={style_signup.error}>{confirmPasswordError}</Text>
        )}
      </View>
      <TouchableOpacity style={style_signup.button} onPress={handleSignUp}>
        <Text style={style_signup.buttonText}>Sign-Up</Text>
      </TouchableOpacity>
      {successMessage !== "" && (
        <Text style={style_signup.success}>{successMessage}</Text>
      )}
    </View>
  );
}
