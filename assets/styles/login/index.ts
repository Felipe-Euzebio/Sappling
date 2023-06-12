import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25,
  },
  label: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#F2F6FC",
    borderRadius: 10,
    height: 55,
    padding: 20,
    borderWidth: 0,
  },
  handleLoginBtn: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 10,
    marginBottom: 10,
  },
  handleLoginText: {
    color: "#FFF",
    fontSize: 17,
  },
  handleAuthTypeBtn: {
    padding: 5,
  },
  handleAuthTypeText: {
    textAlign: "center",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
  },
});
