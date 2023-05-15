import { StyleSheet } from "react-native";
import shadow from "../produtos";

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  createBtn: {
    backgroundColor: "#3EA6F2",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    ...shadow,
  },
  createBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  listContainer: {
    // backgroundColor: "#A9A9A9",
    marginTop: 10,
    borderRadius: 6,
    height: 400,
  },
  listHeader: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  listHeaderText: {
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    ...shadow,
    margin: 10,
    borderRadius: 6,
  },
  listItemBtn: {
    flexGrow: 1,
    padding: 22,
    paddingHorizontal: 20,
    backgroundColor: "#228B22",
    borderRadius: 8,
  },
  listItemBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
