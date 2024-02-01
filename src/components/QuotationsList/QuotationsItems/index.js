import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style/';

export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logBitcoin}
                        source={require('../../../img/bitcoincode.png')}
                    />
                    <Text style={styles.dayCotation}>01/01/2024</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>
    );
}