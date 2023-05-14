import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { modalStyles } from "../../../assets/styles/modal";

import { MaterialIcons } from "@expo/vector-icons";

import { FirestoreFunctions as fsf } from "../../api/firebase/firestoreDb";
import { Produtor } from "../../models/Produtor";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";

const CustomModal = ({
  isVisible,
  toggleModal,
  selectedData,
  saveItem,
  deleteItem,
}: any) => {
  const [id, setId] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [tipoLogradouro, setTipoLogradouro] = useState<string>("");
  const [descLogradouro, setDescLogradouro] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");

  const [operationType, setOperationType] = useState<string>(""); // 'create' or 'update'

  useEffect(() => {
    if (selectedData) {
      setId(selectedData.id);
    } else {
      setId("");
    }
  }, [selectedData]);

  const closeModal = () => {
    toggleModal(false);
  };

  const data: Produtor = {
    nome: nome,
    celular: celular,
    endereco: endereco,
    tipoLogradouro: tipoLogradouro,
    descLogradouro: descLogradouro,
    cep: cep,
    bairro: bairro,
    cidade: cidade,
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={modalStyles.modalHeader}>
        <Text style={modalStyles.modalHeaderText}>Incluir Registro</Text>
        <MaterialIcons
          name="close"
          size={24}
          color="black"
          onPress={closeModal}
        />
      </View>

      <View style={modalStyles.modalBody}>
        <TextInput value={id} style={modalStyles.inputHidden} />

        <Text style={modalStyles.inputLabel}>Nome:</Text>
        <TextInput
          value={nome}
          onChangeText={(value) => setNome(value)}
          underlineColorAndroid={"transparent"}
          style={modalStyles.input}
        />

        <Text style={modalStyles.inputLabel}>Celular:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={celular}
          onChangeText={(value) => setCelular(value)}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          underlineColorAndroid={"transparent"}
          style={modalStyles.input}
        />

        <Text style={modalStyles.inputLabel}>Telefone:</Text>
        <TextInputMask
          type={'cel-phone'}
          value={telefone}
          onChangeText={(value) => setTelefone(value)}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          underlineColorAndroid={"transparent"}
          style={modalStyles.input}
        />

        <Text style={modalStyles.inputLabel}>Endereço:</Text>
        <TextInput
          value={endereco}
          onChangeText={(value) => setEndereco(value)}
          underlineColorAndroid={"transparent"}
          style={modalStyles.input}
        />

        <Picker
          selectedValue={tipoLogradouro}
          onValueChange={(value, index) => setTipoLogradouro(value)}
        >
          <Picker.Item label="Rua" value={'rua'}/>
          <Picker.Item label="Avenida" value={'avenida'}/>
          <Picker.Item label="Córrego" value={'corrego'}/>
          <Picker.Item label="Rodovia" value={'rodovia'}/>
          <Picker.Item label="Sítio" value={'sitio'}/>
          <Picker.Item label="Fazenda" value={'fazenda'}/>
          <Picker.Item label="Vale" value={'valet'}/>
        </Picker>

        <TouchableHighlight
          onPress={() => saveItem(data)}
          style={modalStyles.submitBtn}
        >
          <Text style={modalStyles.submitBtnText}>Salvar</Text>
        </TouchableHighlight>

        {data.id && (
          <TouchableHighlight
            onPress={() => deleteItem(data)}
            style={modalStyles.deleteBtn}
          >
            <Text style={modalStyles.deleteBtnText}>Excluir</Text>
          </TouchableHighlight>
        )}
      </View>
    </Modal>
  );
};

export { CustomModal };
