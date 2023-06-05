import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { styles } from '../../../assets/styles/produtos';

export default function ProducaoAnualList({ data, editItem }: any) {
    return (
        <View style={styles.listItemContainer}>
            <TouchableHighlight style={styles.listItemBtn} underlayColor="#DDDDDD" onPress={() => editItem(data)}>
                <Text style={styles.listItemBtnText}>
                    {data.ano} — {data.descricao}
                </Text>
            </TouchableHighlight>
        </View>
    );
}
