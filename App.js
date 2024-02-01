import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

function addZero(number) {
  if(number <= 9){
    return "0" + number;
  }
  return number;
}

function url(qtdDays) {
  const date = new Date();
  const listLastDays = qtdDays;
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;
  /* Ele seta a data com a data atual menos a quantidade de dias que foi passado como parametro  */
  date.setDate(date.getDate() - listLastDays)
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;


  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor='#f50d41'
        barStyle="ligth-content"
        style="auto"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
      <QuotationsItems />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
