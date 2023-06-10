import { View, Text } from 'react-native'
import React from 'react'
import { 
    BarChart,
    PieChart 
} from 'react-native-chart-kit'

export const CustomBarChart = (props: any) => {
    return (
        <View>
            <BarChart
                {...props}
            />
        </View>
    )
}

export const CustomPieChart = (props: any) => {
    return (
        <View>
            <PieChart
                {...props}
            />
        </View>
    )
}   