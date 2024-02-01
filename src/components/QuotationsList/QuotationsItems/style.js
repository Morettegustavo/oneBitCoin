import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000',
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },
    logBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 3,
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contextLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start'
    },
    contextRigth: {
        width: '60%',
        alignItems: 'flex-end'
    },
    price: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default styles;