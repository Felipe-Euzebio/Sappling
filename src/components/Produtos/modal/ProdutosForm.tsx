import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, TouchableHighlight, View, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { styles } from "../../../../assets/styles/home";
import { modalStyles } from "../../../../assets/styles/modal";

import { MaterialIcons } from "@expo/vector-icons";

import { FirestoreFunctions as fsf } from "../../../api/firebase/firestoreDb";
import { Produto } from "../../../types/Produto";

const ProdutosForm = ({ isVisible, toggleModal, selectedData, saveItem, deleteItem }: any) => {
  const [id, setId] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [observacao, setObservacao] = useState<string>("");
  const [operationType, setOperationType] = useState<string>(""); // 'create' or 'update'

  useEffect(() => {
    if (selectedData) {
      setId(selectedData.id);
      setDescricao(selectedData.descricao);
      setObservacao(selectedData.observacao);
    } else {
      setId("");
      setDescricao("");
      setObservacao("");
    }
  }, [selectedData]);

  const closeModal = () => {
    toggleModal(false);
  };

  const data: Produto = {
    id: id,
    descricao: descricao,
    observacao: observacao,
  };

  return (
    <Modal isVisible={isVisible} avoidKeyboard>
      <View style={modalStyles.modalHeader}>
        <Text style={modalStyles.modalHeaderText}>Incluir Registro</Text>
        <MaterialIcons name="close" size={32} color="black" onPress={closeModal} />
      </View>

      <View style={modalStyles.modalBody}>
        <ScrollView>
          <TextInput value={id} style={modalStyles.inputHidden} />

          <Text style={modalStyles.inputLabel}>Descrição:</Text>
          <TextInput
            value={descricao}
            onChangeText={(value) => setDescricao(value)}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <Text style={modalStyles.inputLabel}>Observação:</Text>
          <TextInput
            value={observacao}
            onChangeText={(value) => setObservacao(value)}
            editable={true}
            multiline={true}
            numberOfLines={4}
            maxLength={255}
            underlineColorAndroid={"transparent"}
            style={modalStyles.textArea}
          />
        </ScrollView>
        <TouchableHighlight onPress={() => saveItem(data)} style={modalStyles.submitBtn}>
          <Text style={modalStyles.submitBtnText}>Salvar</Text>
        </TouchableHighlight>

        {data.id && (
          <TouchableHighlight onPress={() => deleteItem(data)} style={modalStyles.deleteBtn}>
            <Text style={modalStyles.deleteBtnText}>Excluir</Text>
          </TouchableHighlight>
        )}
      </View>
    </Modal>
  );
};

export { ProdutosForm };
