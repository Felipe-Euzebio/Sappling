import { 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'

import { styles } from '../../../assets/styles/home'
import { inputStyles } from '../../../assets/styles/input';

import Menus from '../Menus';

import { MaterialIcons } from '@expo/vector-icons'; 

import { Auth } from '../../api/firebase/simpleAuth';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = ({ userData }: any) => {

  const navigation = useNavigation<any>();

  const navigateTo = (route: string) => {
    navigation.navigate(route);
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar backgroundColor="#228B22" barStyle="light-content" />

      <View style={styles.container}>
        
        <View style={styles.userArea}>
          <View style={styles.userProfile}>

            <Feather name="user" size={32} color="#FFF" />

            <Text style={styles.userText}>{userData?.usuario}</Text>
            
          </View>

          <TouchableWithoutFeedback onPress={() => Auth.logout()}>
            <MaterialIcons name="logout" size={24} color="#FFF" style={{margin: 10}}/>
          </TouchableWithoutFeedback>

        </View>

        <View style={styles.menusArea}>
          <Menus/>
        </View>

        <View style={styles.contentBox}>
          <TouchableOpacity 
            onPress={() => navigateTo('ProducaoAnualChart')}
            style={inputStyles.secondaryBtn}
          >
            <FontAwesome5 name="chart-bar" size={24} color="#fff" />
            <Text style={inputStyles.secondaryBtnText}>Relatórios de Produção Anual</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )

}

export default Home
