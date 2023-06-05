import { Text, View, SafeAreaView, StatusBar, Image, TouchableWithoutFeedback } from "react-native";

import { styles } from "../../../assets/styles/home";
import Menus from "../Menus";

import { MaterialIcons } from "@expo/vector-icons";

import { Auth } from "../../api/firebase/simpleAuth";

import { Feather } from '@expo/vector-icons';

const Home = ({ userData, navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar hidden={false} backgroundColor="#228B22" />

      <View style={styles.container}>
        <View style={styles.userArea}>
          <View style={styles.userProfile}>

            <Feather name="user" size={32} color="#FFF" />

            <Text style={styles.userText}>{userData?.usuario}</Text>
          </View>

          <TouchableWithoutFeedback onPress={() => Auth.logout()}>
            <MaterialIcons name="logout" size={24} color="#FFF" style={{ margin: 10 }} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.menusArea}>
          <Menus />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
