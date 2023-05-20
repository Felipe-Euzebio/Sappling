import { useState } from "react";
import { View, TextInput, SafeAreaView, Text, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "../../../assets/styles/login";

import { loginOrRegister } from "../../api/firebase/auth";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const [type, setType] = useState("login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isFormValid, setIsFormValid] = useState(false);

  const handleAuthType = () => {
    setType((type) => (type === "login" ? "register" : "login"));
  };

  const handleRequiredFields = () => {
    let isEmpty = email.trim().length === 0 || password.trim().length === 0;
    return isEmpty;
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container} enabled>
      <StatusBar hidden backgroundColor="#228B22" translucent={true} />
      <SafeAreaView>
        <Image source={require("../../../assets/images/logo.png")} style={styles.logo} alt="Logo" />

        {type === "register" && (
          <View>
            <TextInput
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Usuário"
              underlineColorAndroid={"transparent"}
              style={styles.input}
            />
          </View>
        )}

        <View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Email"
            underlineColorAndroid={"transparent"}
            autoComplete={"email"}
            style={styles.input}
          />
        </View>

        <View>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Senha"
            underlineColorAndroid={"transparent"}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          onPress={() => loginOrRegister(username, email, password, type)}
          disabled={handleRequiredFields()}
          style={[
            styles.handleLoginBtn,
            {
              backgroundColor: type === "login" ? "#228B22" : "#141414",
              opacity: handleRequiredFields() ? 0.5 : 1,
            },
          ]}
        >
          <Text style={styles.handleLoginText}>{type === "login" ? "Acessar" : "Cadastrar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAuthType} style={styles.handleAuthTypeBtn}>
          <Text style={styles.handleAuthTypeText}>{type === "login" ? "Criar uma conta" : "Já tenho uma conta"}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;
