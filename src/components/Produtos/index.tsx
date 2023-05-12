import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../../assets/styles/produtos';
import { Feather } from '@expo/vector-icons';
import { CustomModal } from './CustomModal';

import { FirestoreFunctions as fsf } from '../../api/firebase/firestoreDb'; 
import ProdutosList from '../Lists/ProdutosList';

import { StyleSheet } from 'react-native';

const Produtos = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  useEffect(() => {
    handleListItem();
  }, []);

  const toggleModal = (value: boolean) => {
    setIsModalVisible(value);
  };
  
  const renderItem = ({ produtos }: any) => (
    <View style={{ padding: 16 }}>
      <Text>{produtos.descricao}</Text>
    </View>
  );

  const handleCreateItem = () => {

    setSelectedData([]);
    toggleModal(true);

  }

  const handleEditItem = (data: any) => {

    setSelectedData(data);
    toggleModal(true);

  }

  const handleListItem = () => {

    const snapshot = fsf.readAllData('produtos');

    snapshot.then((querySnapshot: any) => {

      setProdutos([]);

      querySnapshot.forEach((doc: any) => {

        let data = {
          id: doc.id,
          descricao: doc.descricao,
          observacao: doc.observacao
        }

        setProdutos((oldArr) => [...oldArr, data]);

      });

    })
    .catch((error: any) => {

      console.log('Error getting documents: ', error);

    });

  }

  return (
    <View style={styles.container}>

      <CustomModal 
        isVisible={isModalVisible} 
        toggleModal={toggleModal} 
        selectedData={selectedData}
      />

      <TouchableOpacity style={styles.createBtn} onPress={() => handleCreateItem()}>
        <Feather name="plus" size={24} color="#FFF" />
        <Text style={styles.createBtnText}>Incluir</Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProdutosList data={item} editItem={handleEditItem}/>
        )}
        ListHeaderComponent={
          <View style={styles.listHeader}> 
            <Text style={styles.listHeaderText}>
              Produtos
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={styles.listContainer}
      />

    </View>
  );

}

export default Produtos