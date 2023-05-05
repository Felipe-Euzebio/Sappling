import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../../assets/styles/produtos';
import { Feather } from '@expo/vector-icons';
import { CustomModal } from './CustomModal';

const data = [
  { key: '1', name: 'Item 1' },
  { key: '2', name: 'Item 2' },
  { key: '3', name: 'Item 3' },
  { key: '4', name: 'Item 4' },
  { key: '5', name: 'Item 5' },
];

const Produtos = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = (value: boolean) => {
    setIsModalVisible(value);
  };
  
  const renderItem = ({ item }: any) => (
    <View style={{ padding: 16 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <CustomModal 
        isVisible={isModalVisible} 
        toggleModal={toggleModal} 
      />

      <TouchableOpacity style={styles.createBtn} onPress={() => toggleModal(true)}>
        <Feather name="plus" size={24} color="#FFF" />
        <Text style={styles.createBtnText}>Incluir</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />

    </View>
  );

}

export default Produtos