import React, { useEffect, useState } from "react";
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

import { Formik } from 'formik';
import * as Yup from 'yup';
import { ProdutorFormValues } from "../../../models/Produtor";

const ProdutosProdutorForm = ({
    isVisible,
    toggleModal,
    selectedData,
    saveItem,
    deleteItem,
}: any) => {

    const validationSchema = Yup.object({
        nome: Yup.string().required('Nome é obrigatório'),
        celular: Yup.string().required('Celular é obrigatório'),
        endereco: Yup.string().required('Endereço é obrigatório'),
        tipoLogradouro: Yup.string().required('Tipo de logradouro é obrigatório'),
        descLogradouro: Yup.string().required('Descrição do logradouro é obrigatório'),
        cep: Yup.string().required('CEP é obrigatório'),
        bairro: Yup.string().required('Bairro é obrigatório'),
        cidade: Yup.string().required('Cidade é obrigatório')
    });

    const [produtor, setProdutor] = useState<ProdutorFormValues>(new ProdutorFormValues());

    useEffect(() => {

        if (selectedData) {
            setProdutor(new ProdutorFormValues(selectedData));
        }

    }, [selectedData]);

    const handleFormSubmit = (values: ProdutorFormValues) => {
        saveItem(values);
    };

    const handleDeleteItem = () => {
        deleteItem(produtor);
    };

    const closeModal = () => {
        toggleModal(false);
    };

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
                    initialValues={produtor}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    validateOnMount={true}
                    onSubmit={handleFormSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (

                        <View style={modalStyles.modalForm}>

                            <TextInput value={values.id!} style={modalStyles.inputHidden} />

                            <Text style={modalStyles.inputLabel}>Nome:</Text>
                            <TextInput
                                value={values.nome}
                                onChangeText={handleChange('nome')}
                                onBlur={handleBlur('nome')}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <Text style={modalStyles.inputLabel}>Celular:</Text>
                            <TextInputMask
                                type={'cel-phone'}
                                value={values.celular}
                                onChangeText={handleChange('celular')}
                                onBlur={handleBlur('celular')}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <Text style={modalStyles.inputLabel}>Telefone:</Text>
                            <TextInputMask
                                type={'cel-phone'}
                                value={values.telefone}
                                onChangeText={handleChange('telefone')}
                                onBlur={handleBlur('telefone')}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                underlineColorAndroid={"transparent"}
                                style={modalStyles.input}
                            />

                            <TouchableHighlight
                                onPress={() => handleSubmit()}
                                style={[modalStyles.submitBtn, {
                                    opacity: isValid ? 1 : 0.5
                                }]}
                                disabled={!isValid}
                            >
                                <Text style={modalStyles.submitBtnText}>Salvar</Text>
                            </TouchableHighlight>

                            {produtor.id && (
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


