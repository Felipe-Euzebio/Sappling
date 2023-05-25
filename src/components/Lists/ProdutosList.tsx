import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import { styles } from "../../../assets/styles/produtos";

export default function ProdutosList({ data, editItem }: any) {
  const excluirItem = (data: any) => {
    //TODO: implementar exclusão
    console.log(data);
  };
  return (
    <View style={styles.listItemContainer}>
      <TouchableHighlight style={styles.listItemBtn} underlayColor="#DDDDDD" onPress={() => editItem(data)}>
        <Text style={styles.listItemBtnText}>{data.descricao}</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles.sideTashBtn} onPress={() => excluirItem(data)}>
        <Feather name="trash-2" size={24} color="#ff0000" accessibilityHint="excluir item" />
      </TouchableOpacity>
    </View>
  );
}
