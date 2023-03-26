import { StyleSheet } from "react-native";

const style_signup = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container_signup: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
  title: {
    opacity: 50,
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "dodgerblue",
    padding: 16,
    borderRadius: 8,
    width: "64%",
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
  success: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export { style_signup };
