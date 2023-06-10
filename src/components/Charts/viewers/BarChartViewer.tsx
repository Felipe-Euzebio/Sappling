import { View, Text, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { masterStyles } from '../../../../assets/styles/master'
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { CustomBarChart } from '../charts/RNCharts'
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';

const BarChartViewer = ({ route }: any) => {

    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

    const navigation = useNavigation();
    const { chartData, chartConfig, chartTitle } = route.params;

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View>

            <View style={masterStyles.chartViewerActions}>

                <TouchableWithoutFeedback onPress={goBack}>
                    <MaterialIcons name="close" size={32} color="black" />
                </TouchableWithoutFeedback>

            </View>

            <ScrollView>
                <View style={{ marginBottom: 10 }}>
                    <Text style={masterStyles.chartTitle}>{chartTitle}</Text>
                    <View style={masterStyles.containerChart}>
                        <CustomBarChart
                            data={chartData}
                            width={Dimensions.get("window").width - 10}
                            height={250}
                            chartConfig={chartConfig}
                            style={masterStyles.chart}
                            fromZero={true}
                        />
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default BarChartViewer