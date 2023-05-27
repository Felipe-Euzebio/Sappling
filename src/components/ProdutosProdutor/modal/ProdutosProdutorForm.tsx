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
import { ProdutosProdutorFormValues } from "../../../models/ProdutosProdutor";
import QueryInput from "../../Helpers/QueryInput";

const ProdutosProdutorForm = ({
    isVisible,
    toggleModal,
    selectedData,
    saveItem,
    deleteItem,
}: any) => {

    const validationSchema = Yup.object({
        idProduto: Yup.string().required('Selecione um Produto'),
        idProdutor: Yup.string().required('Selecione um Produtor'),
    });

    const [produtor, setProdutor] = useState<ProdutosProdutorFormValues>(new ProdutosProdutorFormValues());

    useEffect(() => {

        if (selectedData) {
            setProdutor(new ProdutosProdutorFormValues(selectedData));
        }

    }, [selectedData]);

    const handleFormSubmit = (values: ProdutosProdutorFormValues) => {
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

                            <QueryInput
                                isValid={true}
                                label="Produto"
                                style={{ marginBottom: 10 }}
                                stateValue={values.idProduto}
                                setStateValue={handleChange('idProduto')}
                                queryModel="produtos"
                            />

                            <QueryInput
                                isValid={true}
                                label="Produtor"
                                style={{ marginBottom: 10 }}
                                stateValue={values.idProdutor}
                                setStateValue={handleChange('idProdutor')}
                                queryModel="produtores"
                                queryConditions={[
                                    { field: 'id', operator: '==', value: values.idProdutor }
                                ]}
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


