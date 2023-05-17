import { StyleSheet } from "react-native";

const shadow = {
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
};
export const styles_produto = StyleSheet.create({
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
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  listItemBtnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sideTashBtn: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
  },
});

export default shadow;
