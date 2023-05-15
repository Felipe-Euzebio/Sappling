import { useState } from "react";
import { View, Button, TextInput, SafeAreaView, Text, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import Modal from "react-native-modal";
import { styles } from "../../../assets/styles/login";

import firebase from "../../api/firebase/config";
import { Auth } from "../../api/firebase/auth";
import { StatusBar } from "expo-status-bar";
import { FadeIn } from "react-native-reanimated";

const Login = () => {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuthType = () => {
    setType((type) => (type === "login" ? "register" : "login"));
  };

  const handleRequiredFields = () => {
    let isEmpty = email.trim().length === 0 || password.trim().length === 0;
    return isEmpty;
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
      <SafeAreaView>
        <StatusBar hidden={false} backgroundColor="#000000" translucent={true} />
        <Image source={require("../../../assets/images/logo.png")} style={styles.logo} alt="Logo" />

        <View>
          <View>
            <Text style={styles.label}>Email</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              // placeholder="Email aqui"
              underlineColorAndroid={"transparent"}
              autoComplete={"email"}
              style={styles.input}
            />
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.label}>Senha</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              // placeholder="Senha aqui"
              underlineColorAndroid={"transparent"}
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => Auth.loginOrRegister(email, password, type)}
          disabled={handleRequiredFields()}
          style={[
            styles.handleLoginBtn,
            {
              backgroundColor: type === "login" ? "#228B22" : "#141414",
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
