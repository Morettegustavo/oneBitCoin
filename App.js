import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/';
import QuotationsList from './src/components/QuotationsList/';

function addZero(number) {
  if (number <= 9) {
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

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })

  return queryCoinsList.reverse();
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;

  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key]
  })

  return queryCoinsList;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number) {
    console.log(number);
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceCoinsGraphic(url(days)).then((data) => {
      setCoinsGraphicList(data);
    })

    if(updateData) {
      setUpdateData(false);
    }

  }, [updateData])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#f50d41'
        barStyle="ligth-content"
        style="auto"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList filterDay={updateDay} listTrasactions={coinsList} />
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
