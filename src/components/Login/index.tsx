import { useState } from "react";
import { 
    View, 
    Button, 
    TextInput, 
    SafeAreaView,
    Text,
    TouchableOpacity
} from "react-native";
import { styles } from "../../../assets/styles/login";

import firebase from "../../api/firebase/config";
import { Auth } from "../../api/firebase/auth";

const Login = () => {
    const [type, setType] = useState('login'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuthType = () => {
        setType(type => type === 'login' ? 'register' : 'login'); 
    };

    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                underlineColorAndroid={'transparent'}
                style={styles.input}
            />

            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                underlineColorAndroid={'transparent'}
                style={styles.input}
            />

            <TouchableOpacity 
                onPress={() => Auth.loginOrRegister(email, password, type)}
                style={[styles.handleLoginBtn, { 
                    backgroundColor: type === 'login' ? '#3EA6F2' : '#141414'
                }]}
            >
                <Text style={styles.handleLoginText}>
                    {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={handleAuthType}
                style={styles.handleAuthTypeBtn}
            >
                <Text style={styles.handleAuthTypeText}>
                    {type === 'login' ? 'Criar uma conta' : 'Já tenho uma conta'}
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default Login;