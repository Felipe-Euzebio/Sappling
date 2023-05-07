import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';

export default function ProdutosList({ data }: any) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableWithoutFeedback>
                    <Text>
                        {data.descricao}
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4
    }
});