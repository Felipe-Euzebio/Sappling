import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import React, { useState, useRef } from "react";
import { modalStyles } from "../../../assets/styles/modal";
import { Formik } from "formik";
import { FontAwesome5 } from "@expo/vector-icons";
import { inputStyles } from "../../../assets/styles/input";
import { Picker } from "@react-native-picker/picker";

const QueryInput = ({ initialValues, validator, stateValue, isValidProp, style }: any) => {
  const pickerRef = useRef<any>(null);

  const [state, setState] = useState<any>(stateValue);
  const [selectedPickerValue, setSelectedPickerValue] = useState<any>(null);

  const updateState = (value: any) => {
    setState(value);
  };

  const openPicker = () => {
    pickerRef.current && pickerRef.current?.focus();
  };

  const handleInputSubmit = (values: any) => {
    openPicker();
  };

  return (
    <View style={{ padding: 15 }}>
      <View style={inputStyles.hiddenPicker}>
        <Picker selectedValue={stateValue} onValueChange={(itemValue) => setSelectedPickerValue(itemValue)} ref={pickerRef}>
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <View style={inputStyles.inlineInputArea}>
        <TextInput
          onChangeText={(value) => updateState(value)}
          value={state}
          placeholder="Pesquisar"
          underlineColorAndroid={"transparent"}
          style={inputStyles.inlineInput}
        />
        <TouchableHighlight
          onPress={handleInputSubmit}
          style={[
            inputStyles.inlineInputBtn,
            {
              opacity: isValidProp ? 1 : 0.5,
            },
          ]}
        >
          <FontAwesome5 name="search" size={24} color="white" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default QueryInput;
