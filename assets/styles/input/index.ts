import { StyleSheet } from 'react-native'

export const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    flexBox: {
        flex: 1,
    },
    inlineInputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
    },
    inlineInput: {
        backgroundColor: '#D3D3D3',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: 45,
        padding: 10,
        flex: 1,
    },
    inlineInputBtn: {
        backgroundColor: '#3EA6F2',
        padding: 10,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },
    hiddenPicker: {
        width: 0,
        height: 0,
    },
    pickerHeader: {
        backgroundColor: '#228B22',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
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
    searchInlineBtn: {
        backgroundColor: '#3EA6F2',
        padding: 10,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    searchInlineInput: {
        backgroundColor: '#FFF',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414',
        flex: 1,
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
    secondaryBtn: {
        backgroundColor: '#6c757d',
        padding: 10,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    secondaryBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    }, 
});

