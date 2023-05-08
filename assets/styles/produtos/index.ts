import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    createBtn: {
        backgroundColor: '#3EA6F2',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    createBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    listContainer: {
        backgroundColor: '#A9A9A9',
        marginTop: 10,
        borderRadius: 5,
    },
    listHeader: {
        backgroundColor: '#36454F',
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    listHeaderText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});