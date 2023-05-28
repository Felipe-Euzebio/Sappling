import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { styles } from '../../../assets/styles/produtos';

export default function ProdutosProdutorList({ data, editItem }: any) {
    return (
        <View style={styles.listItemContainer}>
            <TouchableHighlight style={styles.listItemBtn} onPress={() => editItem(data)}>
                <Text style={styles.listItemBtnText}>
                    {data.produtoDesc}
                </Text>
            </TouchableHighlight>
        </View>
    );
}
