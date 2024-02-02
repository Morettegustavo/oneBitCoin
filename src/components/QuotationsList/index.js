import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './style/'
import QuotationsItems from './QuotationsItems/';
import { ScrollView } from 'react-native-virtualized-view';
import ButtonQuery from '../Buttons/ButtonQuery/Index';


export default function QuotationsList(props) {
    const daysQuery = props.filterDay;

    return (
        <Fragment>
            <View style={styles.filters}>
                <ButtonQuery
                    onPress={() => daysQuery(7)}
                >
                    7D
                </ButtonQuery>

                <ButtonQuery
                    onPress={() => daysQuery(15)}
                >
                    15D
                </ButtonQuery>

                <ButtonQuery
                    onPress={() => daysQuery(30)}
                >
                    1M
                </ButtonQuery>

                <ButtonQuery
                    onPress={() => daysQuery(90)}
                >
                    3M
                </ButtonQuery>
        
                <ButtonQuery
                    onPress={() => daysQuery(180)}
                >
                    6M
                </ButtonQuery>
            </View>
            <ScrollView>
                <FlatList
                    data={props.listTrasactions}
                    renderItem={({ item }) => {
                        return <QuotationsItems valor={item.valor} data={item.data} />
                    }}
                />
            </ScrollView>
        </Fragment>
    );
}