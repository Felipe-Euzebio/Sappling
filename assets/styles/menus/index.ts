import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#228B22",
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    width: 46,
    height: 46,
  },
  btnArea: {
    flexDirection: "column",
    alignItems: "center",
  },
  btnText: {
    color: "#141414",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
