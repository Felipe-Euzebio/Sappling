import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from '../../../assets/styles/home';
import { modalStyles } from '../../../assets/styles/modal';

import { MaterialIcons } from '@expo/vector-icons';

const CustomModal = ({ isVisible, toggleModal, modalData }: any) => {

  const closeModal = () => {
    toggleModal(false);
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
            underlineColorAndroid={'transparent'}
            style={modalStyles.input}
        />

        <Text style={modalStyles.inputLabel}>Observação:</Text>
        <TextInput
            editable={true}
            multiline={true}
            numberOfLines={4}
            maxLength={255}
            underlineColorAndroid={'transparent'}
            style={modalStyles.textArea}
        />

        <TouchableHighlight style={modalStyles.submitBtn}>
          <Text style={modalStyles.submitBtnText}>Salvar</Text>
        </TouchableHighlight>

      </View>
      
    </Modal>
  );

};

export { CustomModal };
