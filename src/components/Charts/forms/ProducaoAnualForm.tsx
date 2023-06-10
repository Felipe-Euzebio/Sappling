import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import React, { useRef, useState } from 'react'
import { inputStyles } from '../../../../assets/styles/input'
import { Picker } from '@react-native-picker/picker'
import { MaterialIcons } from "@expo/vector-icons";

import { FirestoreFunctions as fsf } from '../../../api/firebase/firestoreDb';

const ProducaoAnualForm = ({dataReturn}: any) => {

  const [produtos, setProdutos] = useState<any[]>([]);

  const [searchProduto, setSearchProduto] = useState('');
  const [searchAno, setSearchAno] = useState('');

  const [selectedProduto, setSelectedProduto] = useState<any>(null);

  const produtosRef = useRef<any>(null);

  const openPicker = (pickerRef: any) => {
    if (pickerRef.current) {
      pickerRef.current.focus();
    }
  };

  const searchForProduto = async () => {

    setProdutos([]);

    if (searchProduto) {

      await fsf.readDataByCondition('produtos', 'descricao', '==', searchProduto).then((response: any) => {
        setProdutos(response);
        openPicker(produtosRef);
      });

    } else {

      await fsf.readAllData('produtos').then((response: any) => {
        setProdutos(response);
        openPicker(produtosRef);
      });

    }

  };

  const handleProdutoChange = (value: any) => {

    setSelectedProduto(value);
    setSearchProduto(value?.descricao);

  };

  const handleAnoChange = (value: any) => {

    let ano = value.replace(/[^0-9]/g, '');
    setSearchAno(ano);

  };

  const validateFields = () => {

    let isNull = selectedProduto === null || searchAno === null;
    let isEmpty = searchProduto === '' || searchAno === '';
    let isInvalid = searchAno.length !== 4;

    return isNull || isEmpty || isInvalid;

  }

  const readProducaoAnualData = async () => {

    if (selectedProduto && searchAno) {

      await fsf.readDataByConditions('producaoAnual', [
        { field: 'idProduto', operator: '==', value: selectedProduto.id },
        { field: 'ano', operator: '==', value: Number(searchAno) }
      ])
      .then((response: any) => {
        dataReturn(response);
      });

    }

  }

  return (

    <View style={inputStyles.container}>

      <View style={{ marginBottom: 10 }}>
        <View style={inputStyles.hiddenPicker}>
          <Picker
            selectedValue={selectedProduto}
            onValueChange={(value) => handleProdutoChange(value)}
            ref={produtosRef}
            itemStyle={{ color: '#000' }}
          >
            {produtos && produtos.map((item: any) => (
              <Picker.Item key={item.id} label={item.descricao} value={item} />
            ))}
          </Picker>
        </View>
        <Text style={inputStyles.inputLabel}>Produto:</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            value={searchProduto}
            onChangeText={(text: string) => setSearchProduto(text)}
            underlineColorAndroid={"transparent"}
            style={inputStyles.searchInlineInput}
            placeholder='Pesquisar...'
          />
          <TouchableHighlight
            onPress={searchForProduto}
            style={inputStyles.searchInlineBtn}
          >
            <MaterialIcons name="search" size={24} color="#fff" />
          </TouchableHighlight>
        </View>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={inputStyles.inputLabel}>Ano:</Text>
        <TextInput
          value={searchAno}
          onChangeText={(text: string) => handleAnoChange(text)}
          underlineColorAndroid={"transparent"}
          style={inputStyles.input}
          maxLength={4}
        />
      </View>

      <View style={inputStyles.flexBox}>

          <TouchableHighlight
            onPress={readProducaoAnualData}
            style={[inputStyles.primaryBtn, {
              justifyContent: 'center',
              opacity: validateFields() ? 0.5 : 1
            }]}
            disabled={validateFields()}
          >
            <Text style={inputStyles.primaryBtnText}>
              Filtrar
            </Text>
          </TouchableHighlight>

      </View>

    </View>

  )

}

export default ProducaoAnualForm;