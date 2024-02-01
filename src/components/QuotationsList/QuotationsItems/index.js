import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style/';

export default function QuotationsItems(props) {
    const data = props.data;
    const valor = props.valor;


    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logBitcoin}
                        source={require('../../../img/bitcoincode.png')}
                    />
                    <Text style={styles.dayCotation}>{data}</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ {valor}</Text>
            </View>
        </View>
    );
}