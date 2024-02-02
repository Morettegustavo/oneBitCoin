import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style/';

export default function ButtonQuery(props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={props.onPress}
            >
                <Text style={styles.textButtonQuery}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
}
