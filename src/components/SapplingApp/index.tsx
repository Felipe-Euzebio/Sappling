import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import Produtos from "../Produtos";
import ProducaoAnual from "../ProducaoAnual";
import Produtores from "../Produtores";

const Stack = createStackNavigator();

const SapplingApp = ({ user }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000000",
          headerStyle: { backgroundColor: "#fff" },
          presentation: "modal",
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ userEmail: user.email }}
            options={{
              headerShown: false,
            }}
          />
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
