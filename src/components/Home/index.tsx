import { 
  Text, 
  View, 
  SafeAreaView, 
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

import { styles } from '../../../assets/styles/home'
import Menus from '../Menus';

import { MaterialIcons } from '@expo/vector-icons'; 

import { Auth } from '../../api/firebase/simpleAuth';

const Home = ({ route, navigation }: any) => {

  const { userEmail } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar backgroundColor="#228B22" barStyle="light-content" />

      <View style={styles.container}>
        
        <View style={styles.userArea}>
          <View style={styles.userProfile}>

            <Image 
              source={require('../../../assets/images/user.png')}
              style={styles.userImage}
            />

            <Text style={styles.userText}>{userEmail}</Text>
            
          </View>

          <TouchableWithoutFeedback onPress={() => Auth.logout()}>
            <MaterialIcons name="logout" size={24} color="#FFF" style={{margin: 10}}/>
          </TouchableWithoutFeedback>

        </View>

        <View style={styles.menusArea}>
          <Menus/>
        </View>

      </View>

    </SafeAreaView>
  )

}

export default Home
