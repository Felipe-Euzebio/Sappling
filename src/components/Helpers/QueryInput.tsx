import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import React, { useState, useRef } from 'react'
import { modalStyles } from '../../../assets/styles/modal';
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import { inputStyles } from '../../../assets/styles/input';
import { Picker } from '@react-native-picker/picker';

import { Condition, FirestoreFunctions as fsf, formatUndefinedArrProps } from '../../api/firebase/firestoreDb';

const QueryInput = ({isValid, label, style, stateValue, setStateValue, queryModel, queryConditions}: any) => {

  const pickerRef = useRef<any>(null);

  const [selectedPickerValue, setSelectedPickerValue] = useState<any>(null);

  const openPicker = () => {
    pickerRef.current && pickerRef.current?.focus();
  };

  const handleInputSubmit = async () => {

    const conditions: Condition[] = formatUndefinedArrProps(queryConditions);

    const data = await fsf.readDataByConditions(queryModel, conditions);

    console.log(data);

  }

  return (
    <View style={style}>
      <View style={inputStyles.hiddenPicker}>
        <Picker 
          selectedValue={stateValue}
          onValueChange={(itemValue) => setSelectedPickerValue(itemValue)}
          ref={pickerRef}
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <View style={inputStyles.inlineInputArea}>
        <TextInput
          onChangeText={(value) => setStateValue(value)}
          value={stateValue}
          placeholder={`Pesquisar ${label}`}
          underlineColorAndroid={'transparent'}
          style={inputStyles.inlineInput}
        />
        <TouchableHighlight
            onPress={handleInputSubmit}
            disabled={!isValid}
            style={[inputStyles.inlineInputBtn, {
                opacity: isValid ? 1 : 0.5
            }]}
        >
            <FontAwesome5 name="search" size={24} color="white" />
        </TouchableHighlight>
      </View>
    </View>
  )

}

export default QueryInput