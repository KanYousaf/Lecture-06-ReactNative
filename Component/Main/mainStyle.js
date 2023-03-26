import { StyleSheet } from "react-native";

const styles_main = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#FCCCFA",
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});

export { styles_main };
