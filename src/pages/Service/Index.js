import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';


function Services({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titleCard}>Minhas Funções</Text>

            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("")}>
                    <Text style={styles.textButton} >Minha Area</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Orcamentos")}>
                    <Text style={styles.textButton} >Meus Orçamentos</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    button: {
        width: 380,
        height: 120,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        margin: 5,
        marginBottom: 10,
        elevation: 10,

    },

    textButton: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',

    },

});