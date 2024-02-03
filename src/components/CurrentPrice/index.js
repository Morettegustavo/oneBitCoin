import React from 'react';
import { Text, View } from 'react-native';
import styles from './style/';

export default function CurrentPrice(props){
    return (
        <View style={styles.headerPrice}>
           <Text style={styles.currentPrice}> { props.lastCotation } </Text>
           <Text style={styles.textPrice}>ultima cotação</Text>
         </View>   
    );
}