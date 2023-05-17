import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";

import { styles_produto } from "../../../assets/styles/produtos";

export default function ProdutosList({ data, editItem }: any) {
  const excluirItem = (data: any) => {
    //TODO: implementar exclusão
    console.log(data);
  };
  return (
    <View style={styles_produto.listItemContainer}>
      <TouchableHighlight style={styles_produto.listItemBtn} underlayColor="#DDDDDD" onPress={() => editItem(data)}>
        <Text style={styles_produto.listItemBtnText}>{data.descricao}</Text>
      </TouchableHighlight>
      <TouchableOpacity style={styles_produto.sideTashBtn} onPress={() => excluirItem(data)}>
        <Feather name="trash-2" size={24} color="#ff0000" accessibilityHint="excluir item" />
      </TouchableOpacity>
    </View>
  );
}
