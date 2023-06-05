import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../../../assets/styles/produtos';
import { Feather } from '@expo/vector-icons';
import { ProducaoAnualForm } from './modal/ProducaoAnualForm';
import ProducaoAnualList from '../Lists/ProducaoAnualList';

import { FirestoreFunctions as fsf } from '../../api/firebase/firestoreDb';
import { useNavigation } from '@react-navigation/native';

const ProducaoAnual = () => {

    const navigation = useNavigation<any>();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalMounted, setIsModalMounted] = useState(false);

    const [producaoAnual, setProducaoAnual] = useState<any[]>([]);
    const [selectedData, setSelectedData] = useState<any[]>([]);

    useEffect(() => {
        handleListItem();
    }, []);

    const toggleModal = (value: boolean) => {
        setIsModalVisible(value);
        setIsModalMounted(value);
    };

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

        fsf.createOrUpdateData('producaoAnual', data.id, data).then(() => {

            handleListItem(); // Refresh the list. Least performatic way.
            toggleModal(false);

        })

    }

    const handleDeleteItem = (data: any) => {

        fsf.deleteData('producaoAnual', data.id).then(() => {

            handleListItem(); // Refresh the list. Least performatic way.
            toggleModal(false);

        });

    }

    const handleListItem = () => {

        const snapshot = fsf.readAllData('producaoAnual');

        snapshot.then((querySnapshot: any) => {

            setProducaoAnual([]);

            querySnapshot.forEach(async (doc: any) => {

                let produtoDesc = await fsf.readData('produtos', doc.idProduto).then((data: any) => {
                    return data.descricao
                });

                let produtorDesc = await fsf.readData('produtores', doc.idProdutor).then((data: any) => {
                    return data?.nome
                });

                let data = {
                  id: doc.id,
                  idProduto: doc.idProduto,
                  idProdutor: doc.idProdutor,
                  produtoDesc: produtoDesc,
                  produtorDesc: produtorDesc,
                  descricao: doc.descricao,
                  ano: doc.ano,
                  qtdeProduzida: doc.qtdeProduzida,
                  qtdePerda: doc.qtdePerda,
                  unidadeMedida: doc.unidadeMedida,
                }

                setProducaoAnual((oldArr) => [...oldArr, data]);

            });

        }).catch((error: any) => {

            console.log('Error getting documents: ', error);

        });

    }

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <View style={styles.container}>

            {isModalMounted && (
                <ProducaoAnualForm
                    isVisible={isModalVisible}
                    toggleModal={toggleModal}
                    selectedData={selectedData}
                    saveItem={handleSaveItem}
                    deleteItem={handleDeleteItem}
                />
            )}

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <TouchableOpacity style={styles.primaryBtn} onPress={() => handleCreate()}>
                    <Feather name="plus" size={24} color="#FFF" />
                    <Text style={styles.primaryBtnText}>Incluir</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                data={producaoAnual}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProducaoAnualList data={item} editItem={handleEdit} />
                )}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderText}>
                            Produção Anual
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

export default ProducaoAnual