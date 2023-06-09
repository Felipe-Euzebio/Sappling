import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import { modalStyles } from "../../../assets/styles/modal";

import { MaterialIcons } from "@expo/vector-icons";

import { FirestoreFunctions as fsf } from "../../api/firebase/firestoreDb";
import { Produtor } from "../../models/Produtor";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";

const CustomModal = ({ isVisible, toggleModal, selectedData, saveItem, deleteItem }: any) => {
  const [id, setId] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [tipoLogradouro, setTipoLogradouro] = useState<string>("rua");
  const [descLogradouro, setDescLogradouro] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");

  const [operationType, setOperationType] = useState<string>(""); // 'create' or 'update'

  useEffect(() => {
    if (selectedData) {
      setId(selectedData.id);
      setNome(selectedData.nome);
      setCelular(selectedData.celular);
      setTelefone(selectedData.telefone);
      setEndereco(selectedData.endereco);
      setTipoLogradouro(selectedData.tipoLogradouro);
      setDescLogradouro(selectedData.descLogradouro);
      setCep(selectedData.cep);
      setBairro(selectedData.bairro);
      setCidade(selectedData.cidade);
    } else {
      setId("");
      setNome("");
      setCelular("");
      setTelefone("");
      setEndereco("");
      setTipoLogradouro("rua");
      setDescLogradouro("");
      setCep("");
      setBairro("");
      setCidade("");
    }
  }, [selectedData]);

  const closeModal = () => {
    toggleModal(false);
  };

  const data: Produtor = {
    nome: nome,
    telefone: telefone,
    celular: celular,
    endereco: endereco,
    tipoLogradouro: tipoLogradouro,
    descLogradouro: descLogradouro,
    cep: cep,
    bairro: bairro,
    cidade: cidade,
  };

  return (
    <Modal isVisible={isVisible} avoidKeyboard={true} coverScreen={true} style={modalStyles.modalContainer}>
      <View style={modalStyles.modalHeader}>
        <Text style={modalStyles.modalHeaderText}>Incluir Registro</Text>
        <MaterialIcons name="close" size={24} color="black" onPress={closeModal} />
      </View>

      <ScrollView style={modalStyles.modalBody} showsVerticalScrollIndicator={false}>
        <View style={modalStyles.modalForm}>
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
            type={"cel-phone"}
            value={celular}
            onChangeText={(value) => setCelular(value)}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <Text style={modalStyles.inputLabel}>Telefone:</Text>
          <TextInputMask
            type={"cel-phone"}
            value={telefone}
            onChangeText={(value) => setTelefone(value)}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
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

          <Text style={modalStyles.inputLabel}>Logradouro:</Text>
          <TextInput
            value={descLogradouro}
            onChangeText={(value) => setDescLogradouro(descLogradouro)}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <Text style={modalStyles.inputLabel}>Tipo de Logradouro:</Text>
          <Picker selectedValue={tipoLogradouro} onValueChange={(value, index) => setTipoLogradouro(value)}>
            <Picker.Item label="Rua" value={"rua"} />
            <Picker.Item label="Avenida" value={"avenida"} />
            <Picker.Item label="Córrego" value={"corrego"} />
            <Picker.Item label="Rodovia" value={"rodovia"} />
            <Picker.Item label="Sítio" value={"sitio"} />
            <Picker.Item label="Fazenda" value={"fazenda"} />
            <Picker.Item label="Vale" value={"valet"} />
          </Picker>

          <Text style={modalStyles.inputLabel}>CEP:</Text>
          <TextInputMask
            type={"zip-code"}
            value={cep}
            onChangeText={(value) => setCep(value)}
            options={{
              maskType: "BRL",
              mask: "99999-999",
            }}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <Text style={modalStyles.inputLabel}>Bairro:</Text>
          <TextInput
            value={bairro}
            onChangeText={(value) => setBairro(value)}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <Text style={modalStyles.inputLabel}>Cidade:</Text>
          <TextInput
            value={cidade}
            onChangeText={(value) => setCidade(value)}
            underlineColorAndroid={"transparent"}
            style={modalStyles.input}
          />

          <TouchableHighlight onPress={() => saveItem(data)} style={modalStyles.submitBtn}>
            <Text style={modalStyles.submitBtnText}>Salvar</Text>
          </TouchableHighlight>

          {data.id && (
            <TouchableHighlight onPress={() => deleteItem(data)} style={modalStyles.deleteBtn}>
              <Text style={modalStyles.deleteBtnText}>Excluir</Text>
            </TouchableHighlight>
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

export { CustomModal };
