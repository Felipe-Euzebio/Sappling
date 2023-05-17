import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import Home from "../Home";
import Produtos from "../Produtos";
import ProducaoAnual from "../ProducaoAnual";
import Produtores from "../Produtores";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const NaviContainer = (props: any) => {
  console.log(props.route);
  console.log(props.back);
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.back.title)}
      style={{
        // backgroundColor: "#228B22",
        marginTop: 20,
        marginBottom: 0,
        height: 50,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Feather name="arrow-left" size={24} color={"#228B22"} />
      <Text style={{ marginStart: 10, fontSize: 20, fontWeight: "bold", color: "#228B22" }}>{props.route.name}</Text>
    </TouchableOpacity>
  );
};

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
