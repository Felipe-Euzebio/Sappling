import { useState } from "react";
import { 
    View, 
    Button, 
    TextInput, 
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image
} from "react-native";
import { styles } from "../../../assets/styles/login";

import { Auth } from "../../api/firebase/simpleAuth";

const Login = () => {
    const [type, setType] = useState('login'); 

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuthType = () => {
        setType(type => type === 'login' ? 'register' : 'login'); 
    };

    const handleRequiredFields = () => {
        let isEmpty = email.trim().length === 0 || password.trim().length === 0;
        return isEmpty; 
    };

    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={require('../../../assets/images/logo.png')}  
                style={styles.logo}
                alt="Logo"
            />

            {type === 'register' && (
                <TextInput
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    placeholder="Usuário"
                    underlineColorAndroid={'transparent'}
                    style={styles.input}
                />
            )}

            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                underlineColorAndroid={'transparent'}
                autoComplete={'email'}
                style={styles.input}
            />

            <TextInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Senha"
                underlineColorAndroid={'transparent'}
                style={styles.input}
            />

            <TouchableOpacity 
                onPress={() => Auth.loginOrRegister(email, password, type)}
                disabled={handleRequiredFields()}
                style={[styles.handleLoginBtn, { 
                    backgroundColor: type === 'login' ? '#228B22' : '#141414'
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