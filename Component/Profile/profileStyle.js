import { StyleSheet } from "react-native";

const styles_profile = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    margin: 10,
    width: "40%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    padding: 16,
    borderRadius: 8,
    width: "30%",
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
  },
});

export { styles_profile };
