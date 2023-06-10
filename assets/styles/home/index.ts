import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentBox: {
    flex: 1,
    margin: 10,
  },
  userArea: {
    backgroundColor: "#228B22",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginEnd: 5,
  },
  userProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    margin: 10,
  },
  userText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  menusArea: {
    flexDirection: "row",
    padding: 10,
  },
});
