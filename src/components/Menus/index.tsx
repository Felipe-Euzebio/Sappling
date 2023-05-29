import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "../../../assets/styles/menus";

import { useNavigation } from "@react-navigation/native";

const Menus = () => {
  const navigation = useNavigation<any>();

  const navigateTo = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} alwaysBounceHorizontal={true}>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.button} onPress={() => navigateTo("Produtores")}>
          <Image source={require("../../../assets/images/menus/produtores.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.btnText}>Produtores{"\n"}Rurais</Text>
      </View>
{/*       <View style={styles.btnArea}>
        <TouchableOpacity style={styles.button} onPress={() => navigateTo("Produtos")}>
          <Image source={require("../../../assets/images/menus/produtos.png")} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.btnText}>Produtos</Text>
      </View> */}
      {/* <View style={styles.btnArea}>
        <TouchableOpacity style={styles.button} onPress={() => navigateTo("ProducaoAnual")}>
          <Image source={require("../../../assets/images/menus/producao.png")} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigateTo('Produtores')}>
          <Image
            source={require('../../../assets/images/menus/produtores.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.btnText}>Produtores{'\n'}Rurais</Text>

      </View> */}
      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.button} onPress={() => navigateTo('ProdutosProdutor')}>
          <Image
            source={require('../../../assets/images/menus/produtos.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.btnText}>Produtos</Text>

      </View>
      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.button} onPress={() => navigateTo('ProducaoAnual')}>
          <Image
            source={require('../../../assets/images/menus/producao.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Text style={styles.btnText}>Produção{'\n'}Anual</Text>

      </View>
      {/* FUTURE FEATURE

            <View style={styles.btnArea}>

                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../../assets/images/menus/relatorios.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <Text style={styles.btnText}>Relatórios</Text>

            </View>

            */}
    </ScrollView>
  );
};

export default Menus;
