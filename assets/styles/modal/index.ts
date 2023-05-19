import { StyleSheet } from 'react-native'

export const modalStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
    },
    modalBody: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    modalForm: {
        marginTop: 5,
        marginBottom: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    modalHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414',
    },
    inputHidden: {
        width: 0,
        height: 0,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textArea: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414',
    },
    submitBtn: {
        backgroundColor: '#3EA6F2',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    submitBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    deleteBtn: {
        backgroundColor: '#F44336',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    deleteBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});