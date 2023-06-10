import { View, Text, Keyboard, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProducaoAnualForm from './forms/ProducaoAnualForm';
import { CustomBarChart } from './charts/RNCharts';
import { useNavigation } from '@react-navigation/native';

const ProducaoAnualChart = () => {

  const navigation = useNavigation<any>();

  const navigateToChart = (route: string, params: object) => {
    navigation.navigate(route, params);
  }

  const handleChart = (data: any) => {

    const [ dataReturn ] = data;

    let measureUnit = dataReturn.unidadeMedida;

    const chartDataProps = {
      labels: [
        `Lucro (${measureUnit})`,
        `Perda (${measureUnit})`
      ],
      datasets: [
        {
          data: [
            dataReturn.qtdeProduzida ? dataReturn.qtdeProduzida : 0,
            dataReturn.qtdePerda ? dataReturn.qtdePerda : 0
          ]
        }
      ],
    };

    let colorProp = (opacity = 1) => `rgba(26, 255, 146, ${opacity})`;

    const chartConfigProps = {
      color: colorProp,
      strokeWidth: 2, // optional, default 3
      barPercentage: 1,
      useShadowColorFromDataset: false, // optional
    };

    Keyboard.dismiss();

    navigateToChart('BarChartViewer', { 
      chartData: chartDataProps,
      chartConfig: chartConfigProps,
      chartTitle: 'Detalhamento de Produção Anual'
    });

  }

  return (
    <>
      <ProducaoAnualForm 
        dataReturn={handleChart}
      />
    </>
  )
}

export default ProducaoAnualChart