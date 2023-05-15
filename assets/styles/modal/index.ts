import { StyleSheet } from "react-native";
import shadow from "../produtos";

export const modalStyles = StyleSheet.create({
  modalBody: {
    flex: 0,
    maxHeight: "70%",
    backgroundColor: "#fff",
    padding: 12,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  modalHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 55,
    padding: 20,
    borderWidth: 1,
  },
  inputHidden: {
    width: 0,
    height: 0,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textArea: {
    height: 80,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  submitBtn: {
    backgroundColor: "#3EA6F2",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    ...shadow,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteBtn: {
    backgroundColor: "#F44336",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    ...shadow,
  },
  deleteBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
