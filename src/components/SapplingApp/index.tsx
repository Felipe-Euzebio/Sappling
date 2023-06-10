import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../Home";
import Produtos from "../Produtos";
import ProducaoAnual from "../ProducaoAnual";
import Produtores from "../Produtores";
import { TouchableOpacity } from "react-native-gesture-handler";

import { readDataFromStorage } from '../../helpers/asyncStorage';
import { useEffect, useState } from 'react';
import ProdutosProdutor from '../ProdutosProdutor';
import ProducaoAnualChart from '../Charts/ProducaoAnualChart';
import BarChartViewer from '../Charts/viewers/BarChartViewer';

const Stack = createStackNavigator();

const SapplingApp = () => {
  const [userData, setUserData] = useState<any>(null);

  const getUserStorageData = async () => {
    await readDataFromStorage("userStorage").then((data) => {
      setUserData(data);
    });
  };

  useEffect(() => {
    getUserStorageData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          cardStyle: { backgroundColor: '#FFF' },
          headerTintColor: '#FFF',
          headerStyle: { backgroundColor: '#228B22' },
          presentation: 'modal',
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {() => <Home userData={userData} />}
          </Stack.Screen>
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={{
              presentation: 'card',
            }}
          />
          <Stack.Screen
            name="ProdutosProdutor"
            component={ProdutosProdutor}
            options={{
              title: 'Meus Produtos',
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Produtores"
            component={Produtores}
            options={{
              title: 'Produtores Rurais',
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="ProducaoAnual"
            component={ProducaoAnual}
            options={{
              title: 'Produção Anual',
            }}
          />
          <Stack.Screen
            name="ProducaoAnualChart"
            component={ProducaoAnualChart}
            options={{
              title: 'Relatórios de Produção Anual',
            }}
          />
          <Stack.Screen
            name="BarChartViewer"
            component={BarChartViewer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SapplingApp;
