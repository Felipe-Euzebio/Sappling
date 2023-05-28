import React, { useEffect, useRef, useState } from "react";
import {
    Text,
    TextInput,
    TouchableHighlight,
    View,
    ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { modalStyles } from "../../../../assets/styles/modal";

import { MaterialIcons } from "@expo/vector-icons";

import { TextInputMask } from "react-native-masked-text";
import { Picker } from "@react-native-picker/picker";
import { inputStyles } from "../../../../assets/styles/input";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ProdutosProdutorFormValues } from "../../../models/ProdutosProdutor";

import { FirestoreFunctions as fsf } from '../../../api/firebase/firestoreDb';
import { getObjectByProperty } from '../../../helpers/functions';

const ProdutosProdutorForm = ({
    isVisible,
    toggleModal,
    selectedData,
    saveItem,
    deleteItem,
}: any) => {

    const produtosRef = useRef<any>(null);
    const produtoresRef = useRef<any>(null);

    const [searchProduto, setSearchProduto] = useState<string>('');
    const [searchProdutor, setSearchProdutor] = useState<string>('');

    const [produtos, setProdutos] = useState<any[]>([]);
    const [produtores, setProdutores] = useState<any[]>([]);

    const [produtosProdutor, setProdutosProdutor] = useState<ProdutosProdutorFormValues>(new ProdutosProdutorFormValues());

    useEffect(() => {

        if (selectedData) {
            setProdutosProdutor(new ProdutosProdutorFormValues(selectedData));
            setSearchProduto(selectedData.produtoDesc);
            setSearchProdutor(selectedData.produtorDesc);
        }

    }, [selectedData]);

    const handleFormSubmit = (values: ProdutosProdutorFormValues) => {
        saveItem(values);
    };

    const handleDeleteItem = () => {
        deleteItem(produtosProdutor);
    };

    const closeModal = () => {
        toggleModal(false);
    };

    const openPicker = (pickerRef: any) => {
        if (pickerRef.current) {
            pickerRef.current.focus();
        }
    };

    const validateFieldValues = (values: ProdutosProdutorFormValues) => {

        let isEmptyString = values.idProduto === '' || values.idProdutor === '';
        let isNull = values.idProduto === null || values.idProdutor === null;
        let isUndefined = values.idProduto === undefined || values.idProdutor === undefined;

        return isEmptyString || isNull || isUndefined;

    }

    const searchForProduto = () => {

        setProdutos([]);

        if (searchProduto) {

            fsf.readDataByCondition('produtos', 'descricao', '==', searchProduto).then((response: any) => {
                setProdutos(response);
                openPicker(produtosRef);
            });

        } else {

            fsf.readAllData('produtos').then((response: any) => {
                setProdutos(response);
                openPicker(produtosRef);
            });

        }

    };

    const searchForProdutor = () => {

        setProdutores([]);

        if (searchProdutor) {

            fsf.readDataByCondition('produtores', 'nome', '==', searchProdutor).then((response: any) => {
                setProdutores(response);
                openPicker(produtoresRef);
            });

        } else {

            fsf.readAllData('produtores').then((response: any) => {
                setProdutores(response);
                openPicker(produtoresRef);
            });

        }

    };

    const handleProdutoItemValue = (setFieldValue: any, fieldName: string, itemValue: string, ) => {

        setFieldValue(fieldName, itemValue);

        const produtoObj = getObjectByProperty(produtos, 'id', itemValue);

        if (produtoObj) {

            setSearchProduto(produtoObj.descricao);

        }    
        
    };

    const handleProdutorItemValue = (setFieldValue: any, fieldName: string, itemValue: string, ) => {

        setFieldValue(fieldName, itemValue);

        const produtorObj = getObjectByProperty(produtores, 'id', itemValue);

        if (produtorObj) {

            setSearchProdutor(produtorObj.nome);

        }    
        
    }

    return (

        <Modal isVisible={isVisible} avoidKeyboard={true} style={modalStyles.modalContainer}>
            <View style={modalStyles.modalHeader}>
                <Text style={modalStyles.modalHeaderText}>Incluir Registro</Text>
                <MaterialIcons
                    name="close"
                    size={24}
                    color="black"
                    onPress={closeModal}
                />
            </View>

            <ScrollView style={modalStyles.modalBody} showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={produtosProdutor}
                    enableReinitialize={true}
                    onSubmit={handleFormSubmit}
                >
                    {({ handleChange, setFieldValue, handleBlur, handleSubmit, values }) => (

                        <View style={modalStyles.modalForm}>

                            <TextInput value={values.id!} style={modalStyles.inputHidden} />

                            <View style={{marginBottom: 10}}>
                                <View style={inputStyles.hiddenPicker}>
                                    <Picker
                                        selectedValue={values.idProduto}
                                        onValueChange={(itemValue) => handleProdutoItemValue(setFieldValue, 'idProduto', itemValue)}
                                        onBlur={handleBlur('idProduto')}
                                        ref={produtosRef}
                                        itemStyle={{color: '#000'}}
                                    >
                                        {produtos.length === 0 && (
                                            <Picker.Item label="Nenhum registro encontrado." value="" enabled={false}/>
                                        )}
                                        {produtos.map((item: any) => (
                                            <Picker.Item key={item.id} label={item.descricao} value={item.id} />
                                        ))}
                                    </Picker>
                                </View>
                                <Text style={modalStyles.inputLabel}>Produto:</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TextInput
                                        value={searchProduto}
                                        onChangeText={(text) => setSearchProduto(text)}
                                        underlineColorAndroid={"transparent"}
                                        style={modalStyles.searchInlineInput}
                                    />
                                    <TouchableHighlight
                                        onPress={searchForProduto}
                                        style={modalStyles.searchInlineBtn}
                                    >
                                        <MaterialIcons name="search" size={24} color="#fff" />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <View style={{marginBottom: 10}}>
                                <View style={inputStyles.hiddenPicker}>
                                    <Picker
                                        selectedValue={values.idProdutor}
                                        onValueChange={(itemValue) => handleProdutorItemValue(setFieldValue, 'idProdutor', itemValue)}
                                        onBlur={handleBlur('idProdutor')}
                                        ref={produtoresRef}
                                        itemStyle={{color: '#000'}}
                                    >
                                        {produtores.length === 0 && (
                                            <Picker.Item label="Nenhum registro encontrado." value="" enabled={false}/>
                                        )}
                                        {produtores.map((item: any) => (
                                            <Picker.Item key={item.id} label={item.nome} value={item.id} />
                                        ))}
                                    </Picker>
                                </View>
                                <Text style={modalStyles.inputLabel}>Produtor:</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <TextInput
                                        value={searchProdutor}
                                        onChangeText={(value) => setSearchProdutor(value)}
                                        underlineColorAndroid={"transparent"}
                                        style={modalStyles.searchInlineInput}
                                    />
                                    <TouchableHighlight
                                        onPress={searchForProdutor}
                                        style={modalStyles.searchInlineBtn}
                                    >
                                        <MaterialIcons name="search" size={24} color="#fff" />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <TouchableHighlight
                                onPress={() => handleSubmit()}
                                style={[modalStyles.submitBtn, {
                                    opacity: validateFieldValues(values) ? 0.5 : 1
                                }]}
                                disabled={validateFieldValues(values)}
                            >
                                <Text style={modalStyles.submitBtnText}>Salvar</Text>
                            </TouchableHighlight>

                            {produtosProdutor.id && (
                                <TouchableHighlight
                                    onPress={handleDeleteItem}
                                    style={modalStyles.deleteBtn}
                                >
                                    <Text style={modalStyles.deleteBtnText}>Excluir</Text>
                                </TouchableHighlight>
                            )}

                        </View>

                    )}
                </Formik>
            </ScrollView>
        </Modal>

    );
};

export { ProdutosProdutorForm };


