import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import styles from './style/';

export default function HistoryGraphic(props) {
  return (
    <View>
      <LineChart
        data={{
          datasets: [
            {
              data: props.infoDataGraphic
            },
          ]
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        withVerticalLines={false}
        yLabelsOffset={1}
        withVerticalLabels={false}
        chartConfig={{
          backgroundColor: "#000",
          backgroundGradientFrom: "#232323",
          backgroundGradientTo: "#3F3F3F",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '1',
            strokeWidth: "1",
            stroke: "#f50d41",
          },
        }}
        bezier
      />
    </View>
  );
}