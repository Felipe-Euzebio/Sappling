import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    primaryBtn: {
        backgroundColor: '#3EA6F2',
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
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
        fontWeight: 'bold',
    },
    listItemContainer: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 6,
    },
    listItemBtn: {
        padding: 10,
        backgroundColor: '#228B22',
        borderRadius: 6,
    },
    listItemBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});