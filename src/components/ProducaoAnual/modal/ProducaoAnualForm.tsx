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
import { ProducaoAnualFormValues } from "../../../models/ProducaoAnual";

import { FirestoreFunctions as fsf } from '../../../api/firebase/firestoreDb';
import { getObjectByProperty } from '../../../helpers/functions';
import { Toasts } from "../../../api/toast-message/toasts";

const ProducaoAnualForm = ({
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

    const [producaoAnual, setProducaoAnual] = useState<ProducaoAnualFormValues>(new ProducaoAnualFormValues());

    useEffect(() => {

        if (selectedData) {
            setProducaoAnual(new ProducaoAnualFormValues(selectedData));
            setSearchProduto(selectedData.produtoDesc);
            setSearchProdutor(selectedData.produtorDesc);
        }

    }, [selectedData]);

    const handleFormSubmit = (values: ProducaoAnualFormValues) => {

        values.ano = Number(values.ano);

        values.qtdeProduzida = parseFloat(values.qtdeProduzida.toString().replace(',', '.'));
        values.qtdePerda = parseFloat(values.qtdePerda.toString().replace(',', '.'));

        saveItem(values);

    };

    const handleDeleteItem = () => {
        deleteItem(producaoAnual);
    };

    const closeModal = () => {
        toggleModal(false);
    };

    const openPicker = (pickerRef: any) => {
        if (pickerRef.current) {
            pickerRef.current.focus();
        }
    };

    const validationSchema = Yup.object({
        idProdutor: Yup.string().required('O produtor é obrigatório'),
        idProduto: Yup.string().required('O produto é obrigatório'),
        descricao: Yup.string().required('A descrição é obrigatória'),
        ano: Yup.string().required('O ano de produção é obrigatório'),
        qtdeProduzida: Yup.string().required('A quantidade produzida é obrigatória'),
        qtdePerda: Yup.string().required('A quantidade vendida é obrigatória'),
        unidadeMedida: Yup.string().required('A unidade de medida é obrigatória'),
    });

    const searchForProduto = async () => {

        setProdutos([]);

        if (searchProduto) {

            await fsf.readDataByCondition('produtos', 'descricao', '==', searchProduto)
            .then((response: any) => {
                setProdutos(response);
                openPicker(produtosRef);
            })
            .catch((error: any) => {
                Toasts.showError('Erro ao buscar os produtos');
                console.log(error);
            });

        } else {

            await fsf.readAllData('produtos')
            .then((response: any) => {
                setProdutos(response);
                openPicker(produtosRef);
            })
            .catch((error: any) => {
                Toasts.showError('Erro ao buscar os produtos');
                console.log(error);
            });

        }

    };

    const searchForProdutor = async () => {

        setProdutores([]);

        if (searchProdutor) {

            await fsf.readDataByCondition('produtores', 'nome', '==', searchProdutor)
            .then((response: any) => {
                setProdutores(response);
                openPicker(produtoresRef);
            })
            .catch((error: any) => {
                Toasts.showError('Erro ao buscar os produtores');
                console.log(error);
            });

        } else {

            await fsf.readAllData('produtores')
            .then((response: any) => {
                setProdutores(response);
                openPicker(produtoresRef);
            })
            .catch((error: any) => {
                Toasts.showError('Erro ao buscar os produtores');
                console.log(error);
            });

        }

    };

    const handleProdutoItemValue = (setFieldValue: any, fieldName: string, itemValue: string, ) => {

        setSearchProduto('');
        setFieldValue(fieldName, itemValue);

        const produtoObj = getObjectByProperty(produtos, 'id', itemValue);

        if (produtoObj) {

            setSearchProduto(produtoObj.descricao);

        }    
        
    };

    const handleProdutorItemValue = (setFieldValue: any, fieldName: string, itemValue: string, ) => {

        setSearchProdutor('');
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
                    initialValues={producaoAnual}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    validateOnMount={true}
                    onSubmit={handleFormSubmit}
                >
                    {({ handleChange, setFieldValue, handleBlur, handleSubmit, values, errors, touched }) => (

                        <View style={modalStyles.modalForm}>

                            <TextInput value={values.id!} style={modalStyles.inputHidden} />

                            <View style={{marginBottom: 10}}>
                                <View style={inputStyles.hiddenPicker}>
                                    <Picker
                                        selectedValue={values.idProduto}
                                        onValueChange={(itemValue, itemIndex) => { 
                                            if (itemIndex >= 0) {
                                                handleProdutoItemValue(setFieldValue, 'idProduto', itemValue) 
                                            }
                                        }}
                                        ref={produtosRef}
                                        itemStyle={{color: '#000'}}
                                    >
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
                                        onValueChange={(itemValue, itemIndex) => {
                                            if(itemIndex >= 0) {
                                                handleProdutorItemValue(setFieldValue, 'idProdutor', itemValue)
                                            }
                                        }}
                                        ref={produtoresRef}
                                        itemStyle={{color: '#000'}}
                                    >
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

                            <Text style={modalStyles.inputLabel}>Descrição:</Text>
                            <TextInput
                                value={values.descricao}
                                onChangeText={handleChange('descricao')}
                                onBlur={handleBlur('descricao')}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <Text style={modalStyles.inputLabel}>Ano de Produção:</Text>
                            <TextInput
                                value={values.ano?.toString()}
                                onChangeText={(text) => handleChange('ano')(text.replace(/[^0-9]/g, ''))}
                                onBlur={handleBlur('ano')}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <Text style={modalStyles.inputLabel}>Quantidade Produzida:</Text>
                            <TextInput
                                value={values.qtdeProduzida !== undefined ? String(values.qtdeProduzida) : ''}
                                onChangeText={handleChange('qtdeProduzida')}
                                onBlur={handleBlur('qtdeProduzida')}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />  

                            <Text style={modalStyles.inputLabel}>Quantidade Perdida:</Text>
                            <TextInput
                                value={values.qtdePerda !== undefined ? String(values.qtdePerda) : ''}
                                onChangeText={handleChange('qtdePerda')}
                                onBlur={handleBlur('qtdePerda')}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <Text style={modalStyles.inputLabel}>Unidade de Medida:</Text>
                            <Picker
                                selectedValue={values.unidadeMedida}
                                onValueChange={handleChange('unidadeMedida')}
                                onBlur={handleBlur('unidadeMedida')}
                            >
                                <Picker.Item label="Selecione uma unidade de medida" value={''} enabled={false} color="#228B22"/>
                                <Picker.Item label="Unidade" value={'unidade'} color="#000"/>
                                <Picker.Item label="Quilograma" value={'quilograma'} color="#000"/>
                                <Picker.Item label="Tonelada" value={'tonelada'} color="#000"/>
                                <Picker.Item label="Litro" value={'litro'} color="#000"/>
                            </Picker>

                            <TouchableHighlight
                                onPress={() => handleSubmit()}
                                style={[modalStyles.submitBtn, {
                                    opacity: false ? 0.5 : 1
                                }]}
                                disabled={false}
                            >
                                <Text style={modalStyles.submitBtnText}>Salvar</Text>
                            </TouchableHighlight>

                            {producaoAnual.id && (
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

export { ProducaoAnualForm };


