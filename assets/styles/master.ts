import { StyleSheet } from 'react-native';

export const masterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseContainer: {
        flex: 1,
        margin: 10,
    },
    containerChart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chart: {
        borderRadius: 10, 
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    chartViewerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15,
    }
});