import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../../assets/styles/produtos';
import { Feather } from '@expo/vector-icons';

const data = [
  { key: '1', name: 'Item 1' },
  { key: '2', name: 'Item 2' },
  { key: '3', name: 'Item 3' },
  { key: '4', name: 'Item 4' },
  { key: '5', name: 'Item 5' },
];

const Produtos = () => {
  const renderItem = ({ item }: any) => (
    <View style={{ padding: 16 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.createBtn}>
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