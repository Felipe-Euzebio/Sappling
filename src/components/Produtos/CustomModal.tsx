import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from '../../../assets/styles/home';
import { modalStyles } from '../../../assets/styles/modal';

import { MaterialIcons } from '@expo/vector-icons';

import { FirestoreFunctions as fsf } from '../../api/firebase/firestoreDb'; 

const CustomModal = ({ isVisible, toggleModal, modalData }: any) => {

  const [descricao, setDescricao] = useState<string>('');
  const [observacao, setObservacao] = useState<string>('');

  const closeModal = () => {
    toggleModal(false);
  };

  type Produto = {
    descricao: string,
    observacao?: string,
  }

  const data: Produto = {
    descricao: descricao,
    observacao: observacao,
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

        <Text style={modalStyles.inputLabel}>Descrição:</Text>
        <TextInput
            value={descricao}
            onChangeText={(value) => setDescricao(value)}
            underlineColorAndroid={'transparent'}
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
            underlineColorAndroid={'transparent'}
            style={modalStyles.textArea}
        />

        <TouchableHighlight
          onPress={() => fsf.createData('produtos', data)}
          style={modalStyles.submitBtn}
        >
          <Text style={modalStyles.submitBtnText}>Salvar</Text>
        </TouchableHighlight>

      </View>
      
    </Modal>
  );

};

export { CustomModal };
