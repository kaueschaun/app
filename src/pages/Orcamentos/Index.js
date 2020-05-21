import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';


function Orcamentos() {
   
    return (
        <ScrollView style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.header} >Serviço - Pintura</Text>

                <Text style={styles.listItemHeader}> Cliente </Text>
                <Text style={styles.listItemText}> Fulano </Text>

                <Text style={styles.listItemHeader}> Data </Text>
                <Text style={styles.listItemText}> 22/05/2020</Text>

                <Text style={styles.listItemHeader}> Horário </Text>
                <Text style={styles.listItemText}> 15:00 </Text>

                <Text style={styles.listItemHeader}> Contato </Text>
                <Text style={styles.listItemText}> (53) 9958155256 </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.header} >Serviço - Aplicar Textura</Text>

                <Text style={styles.listItemHeader}> Cliente </Text>
                <Text style={styles.listItemText}> Siclano </Text>

                <Text style={styles.listItemHeader}> Data </Text>
                <Text style={styles.listItemText}> 28/07/2020</Text>

                <Text style={styles.listItemHeader}> Horário </Text>
                <Text style={styles.listItemText}> 17:00 </Text>

                <Text style={styles.listItemHeader}> Contato </Text>
                <Text style={styles.listItemText}> (53) 9958669256 </Text>
            </View>

        </ScrollView>

    )
}

export default Orcamentos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 60,
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },

    listItemText: {
        fontSize: 24,
        color: '#000000',
        marginBottom: 10,
        color: 'black',
    },

    listItemHeader: {
        fontSize: 16,
        color: '#000000',
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    card: {
        width: 380,
        height: 'auto',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 20,
        marginBottom: 10,
        elevation: 10,

    },

    textButton: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',

    },

});