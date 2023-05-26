import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../../../assets/styles/produtores";
import { Feather } from "@expo/vector-icons";
import { ProdutoresForm } from "./modal/ProdutoresForm";

import { FirestoreFunctions as fsf } from "../../api/firebase/firestoreDb";
import ProdutoresList from "../Lists/ProdutoresList";

import { StyleSheet } from "react-native";

const Produtos = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [produtores, setProdutores] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  useEffect(() => {
    handleListItem();
  }, []);

  const toggleModal = (value: boolean) => {
    setIsModalVisible(value);
  };

  /**
   * -----------------------------------
   * Handles how the modal will behave when either 'creating' or 'updating' a record.
   * -----------------------------------
   */
  const handleCreate = () => {
    setSelectedData([]);
    toggleModal(true);
  };

  const handleEdit = (data: any) => {
    setSelectedData(data);
    toggleModal(true);
  };

  /**
   * -----------------------------------
   * Handles the Create/Read/Update/Delete operations.
   * -----------------------------------
   */
  const handleSaveItem = (data: any) => {
    fsf.createOrUpdateData("produtores", data.id, data).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  const handleDeleteItem = (data: any) => {
    fsf.deleteData("produtores", data.id).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  const handleListItem = () => {
    const snapshot = fsf.readAllData("produtores");

    snapshot
      .then((querySnapshot: any) => {
        setProdutores([]);

        querySnapshot.forEach((doc: any) => {
          let data = {
            id: doc.id,
            nome: doc.nome,
            celular: doc.celular,
            telefone: doc.telefone,
            endereco: doc.endereco,
            tipoLogradouro: doc.tipoLogradouro,
            descLogradouro: doc.descLogradouro,
            cep: doc.cep,
            bairro: doc.bairro,
            cidade: doc.cidade
          };

          setProdutores((oldArr) => [...oldArr, data]);
        });
      })
      .catch((error: any) => {
        console.log("Error getting documents: ", error);
      });
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container}>

      <ProdutoresForm
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedData={selectedData}
        saveItem={handleSaveItem}
        deleteItem={handleDeleteItem}
      />

      <TouchableOpacity style={styles.createBtn} onPress={() => handleCreate()}>
        <Feather name="plus" size={24} color="#FFF" />
        <Text style={styles.createBtnText}>Incluir</Text>
      </TouchableOpacity>

      <FlatList
        data={produtores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProdutoresList data={item} editItem={handleEdit} />
        )}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Produtores</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        style={styles.listContainer}
      />

    </View>
  );
};

export default Produtos;
