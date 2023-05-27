import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../../assets/styles/produtos';
import { Feather } from '@expo/vector-icons';
import { ProdutosProdutorForm } from './modal/ProdutosProdutorForm';

import { FirestoreFunctions as fsf } from '../../api/firebase/firestoreDb';
import ProdutosList from '../Lists/ProdutosList';
import { useNavigation } from '@react-navigation/native';

const ProdutosProdutor = () => {

    const navigation = useNavigation<any>();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [produtosProdutor, setProdutosProdutor] = useState<any[]>([]);
    const [selectedData, setSelectedData] = useState<any[]>([]);

    useEffect(() => {
        handleListItem();
    }, []);

    const toggleModal = (value: boolean) => {
        setIsModalVisible(value);
    };

    const navigateTo = (route: string) => {
        navigation.navigate(route);
    }

    /**
     * -----------------------------------
     * Handles how the modal will behave when either 'creating' or 'updating' a record.
     * -----------------------------------
     */
    const handleCreate = () => {

        setSelectedData([]);
        toggleModal(true);

    }

    const handleEdit = (data: any) => {

        setSelectedData(data);
        toggleModal(true);

    }

    /**
     * -----------------------------------
     * Handles the Create/Read/Update/Delete operations.
     * -----------------------------------
     */
    const handleSaveItem = (data: any) => {

        fsf.createOrUpdateData('produtosProdutor', data.id, data).then(() => {

            handleListItem(); // Refresh the list. Least performatic way.
            toggleModal(false);

        })

    }

    const handleDeleteItem = (data: any) => {

        fsf.deleteData('produtosProdutor', data.id).then(() => {

            handleListItem(); // Refresh the list. Least performatic way.
            toggleModal(false);

        });

    }

    const handleListItem = () => {

        const snapshot = fsf.readAllData('produtosProdutor');

        snapshot.then((querySnapshot: any) => {

            setProdutosProdutor([]);

            querySnapshot.forEach((doc: any) => {

                let data = {
                    id: doc.id,
                    descricao: doc.descricao,
                    observacao: doc.observacao
                }

                setProdutosProdutor((oldArr) => [...oldArr, data]);

            });

        })
            .catch((error: any) => {

                console.log('Error getting documents: ', error);

            });

    }

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <View style={styles.container}>

            <ProdutosProdutorForm
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                selectedData={selectedData}
                saveItem={handleSaveItem}
                deleteItem={handleDeleteItem}
            />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <TouchableOpacity style={styles.primaryBtn} onPress={() => handleCreate()}>
                    <Feather name="plus" size={24} color="#FFF" />
                    <Text style={styles.primaryBtnText}>Incluir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.warningBtn} onPress={() => navigateTo('Produtos')}>
                    <Feather name="box" size={24} color="#FFF" />
                    <Text style={styles.warningBtnText}>Registro de Produtos</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={produtosProdutor}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProdutosList data={item} editItem={handleEdit} />
                )}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderText}>
                            Meus Produtos
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

export default ProdutosProdutor