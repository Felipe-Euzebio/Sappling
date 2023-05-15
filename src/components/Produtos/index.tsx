import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../../../assets/styles/produtos";
import { Feather } from "@expo/vector-icons";
import { CustomModal } from "./CustomModal";

import { FirestoreFunctions as fsf } from "../../api/firebase/firestoreDb";
import ProdutosList from "../Lists/ProdutosList";

import { StyleSheet } from "react-native";

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
    fsf.createOrUpdateData("produtos", data.id, data).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  const handleDeleteItem = (data: any) => {
    fsf.deleteData("produtos", data.id).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  const handleListItem = () => {
    const snapshot = fsf.readAllData("produtos");

    snapshot
      .then((querySnapshot: any) => {
        setProdutos([]);

        querySnapshot.forEach((doc: any) => {
          let data = {
            id: doc.id,
            descricao: doc.descricao,
            observacao: doc.observacao,
          };

          setProdutos((oldArr) => [...oldArr, data]);
        });
      })
      .catch((error: any) => {
        console.log("Error getting documents: ", error);
      });
  };

  ///////////////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container}>
      <CustomModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedData={selectedData}
        saveItem={handleSaveItem}
        deleteItem={handleDeleteItem}
      />

      <TouchableOpacity style={styles.createBtn} onPress={() => handleCreate()}>
        <Text style={styles.createBtnText}>Incluir</Text>
        <Feather name="plus" size={24} color="#FFF" />
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProdutosList data={item} editItem={handleEdit} />}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Produtos</Text>
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
