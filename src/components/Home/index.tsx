import { Text, View, SafeAreaView, StatusBar, Image, TouchableWithoutFeedback } from "react-native";

import { styles } from "../../../assets/styles/home";
import { styles_produto } from "../../../assets/styles/produtos";
import Menus from "../Menus";

import { MaterialIcons } from "@expo/vector-icons";

import { Auth } from "../../api/firebase/simpleAuth";

import { FlatList } from "react-native-gesture-handler";
import ProdutosList from "../Lists/ProdutosList";
import { useEffect, useState } from "react";
import { FirestoreFunctions } from "../../api/firebase/firestoreDb";
import { CustomModal } from "../Produtos/CustomModal";

const Home = ({ userData, navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selectedData, setSelectedData] = useState<any[]>([]);

  useEffect(() => {
    handleListItem();
  }, []);

  const toggleModal = (value: boolean) => {
    setIsModalVisible(value);
  };

  const handleEdit = (data: any) => {
    setSelectedData(data);
    toggleModal(true);
  };

  const handleListItem = () => {
    const snapshot = FirestoreFunctions.readAllData("produtos");

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

  const handleSaveItem = (data: any) => {
    FirestoreFunctions.createOrUpdateData("produtos", data.id, data).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  const handleDeleteItem = (data: any) => {
    FirestoreFunctions.deleteData("produtos", data.id).then(() => {
      handleListItem(); // Refresh the list. Least performatic way.
      toggleModal(false);
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={false} backgroundColor="#228B22" />

      <CustomModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedData={selectedData}
        saveItem={handleSaveItem}
        deleteItem={handleDeleteItem}
      />

      <View style={styles.container}>
        <View style={styles.userArea}>
          <View style={styles.userProfile}>
            <Image source={require("../../../assets/images/user.png")} style={styles.userImage} />

            <Text style={styles.userText}>{userData?.usuario}</Text>
          </View>

          <TouchableWithoutFeedback onPress={() => Auth.logout()}>
            <MaterialIcons name="logout" size={24} color="#FFF" style={{ margin: 10 }} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.menusArea}>
          <Menus />
        </View>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProdutosList data={item} editItem={handleEdit} />}
          ListHeaderComponent={
            <View style={styles_produto.listHeader}>
              <Text style={styles_produto.listHeaderText}>Produtos</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          style={styles_produto.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
