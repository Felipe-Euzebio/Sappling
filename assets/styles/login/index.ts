import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F6FC',
        paddingHorizontal: 10,
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
    handleLoginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 5,
        marginBottom: 10,
    },
    handleLoginText: {
        color: '#FFF',
        fontSize: 17,
    },
    handleAuthTypeBtn: {
        padding: 5,
    },
    handleAuthTypeText: {
        textAlign: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
});
