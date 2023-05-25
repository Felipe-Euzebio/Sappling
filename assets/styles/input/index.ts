import { StyleSheet } from 'react-native'

export const inputStyles = StyleSheet.create({

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
});

