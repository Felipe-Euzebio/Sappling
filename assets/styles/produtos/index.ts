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
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
    },
    primaryBtn: {
        /* backgroundColor: '#3EA6F2',
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10, */
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        ...shadow,
    },
    primaryBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    warningBtn: {
        backgroundColor: '#FFA500',
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    warningBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    listContainer: {
        backgroundColor: '#A9A9A9',
        marginTop: 10,
        borderRadius: 6,
        height: 400,
        flex: 1,
        margin: 10,
    },
    listHeader: {
        backgroundColor: '#36454F',
        padding: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    listHeaderText: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
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
        padding: 10,
        backgroundColor: '#228B22',
        borderRadius: 6,
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    listItemBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
/* 
queryInput: {
  backgroundColor: "#fff",
  padding: 10,
  fontSize: 16,
  fontWeight: "bold",
  margin: 10,
  borderRadius: 6,
  ...shadow,
},

container: {
  flex: 1,
  margin: 0,
},
createBtn: {
  backgroundColor: "#3EA6F2",
  padding: 15,
  borderRadius: 8,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: 10,
  margin: 10,
  ...shadow,
},
createBtnText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  marginLeft: 5,
},
listContainer: {
  marginTop: 10,
  flex: 1,
  borderRadius: 6,
  height: 400,
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

export default shadow; */
