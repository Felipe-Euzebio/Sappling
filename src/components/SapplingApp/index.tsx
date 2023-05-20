import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../Home";
import Produtos from "../Produtos";
import ProducaoAnual from "../ProducaoAnual";
import Produtores from "../Produtores";
import { TouchableOpacity } from "react-native-gesture-handler";

import { readDataFromStorage } from "../../helpers/asyncStorage";
import { useEffect, useState } from "react";

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
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#FFF",
          headerStyle: { backgroundColor: "#228B22" },
          presentation: "modal",
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
          <Stack.Screen name="Produtos" component={Produtos} />
          <Stack.Screen
            name="Produtores"
            component={Produtores}
            options={{
              title: "Produtores Rurais",
            }}
          />
          <Stack.Screen
            name="ProducaoAnual"
            component={ProducaoAnual}
            options={{
              title: "Produção Anual",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SapplingApp;
