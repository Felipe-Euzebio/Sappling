import { StyleSheet } from "react-native";
import shadow from "../../styles/produtos";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  createBtn: {
    margin: 10,
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
    flex: 1,
    borderRadius: 6,
    margin: 10,
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
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 6,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...shadow,

  },
  listItemBtn: {
    flexGrow: 1,
    padding: 22,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    ...shadow,

  },
  listItemBtnText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
