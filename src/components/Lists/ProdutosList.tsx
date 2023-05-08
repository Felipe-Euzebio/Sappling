import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import { styles } from '../../../assets/styles/produtos';

export default function ProdutosList({ data }: any) {
    return (
        <View>
            <TouchableWithoutFeedback>
                <Text>
                    {data.descricao}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );
}
