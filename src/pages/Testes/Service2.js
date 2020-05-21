import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';


function Service2() {
    return (
        <View style={styles.container}>

            <Text style={styles.titleCard}>Serviços</Text>

            <View style={styles.card}>
                <TouchableOpacity style={styles.button} >
                    <View flexDirection='row'>
                        <Text style={styles.textButton} >Pintor</Text>
                        <Image source={require('/fatec/FacilitaPRO/app/img/pintor.jpg')} style={styles.icones} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <View flexDirection='row'>
                        <Text style={styles.textButton} >Encanador</Text>
                        <Image source={require('/fatec/FacilitaPRO/app/img/encanador.jpg')} style={styles.icones} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
            <TouchableOpacity style={styles.button} >
                    <View flexDirection='row'>
                        <Text style={styles.textButton} >Marceneiro</Text>
                        <Image source={require('/fatec/FacilitaPRO/app/img/marceneiro.jpg')} style={styles.icones} />
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} >
                    <View flexDirection='row'>
                        <Text style={styles.textButton} >Pedreiro</Text>
                        <Image source={require('/fatec/FacilitaPRO/app/img/pedreiro.jpg')} style={styles.icones} />
                    </View>
                </TouchableOpacity>
            </View>


        </View>

    )
}

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    icones: {
        width: 50,
        height: 50,
        padding: 30,
    },

    card: {
        flexDirection: 'row',
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    button: {
        width: 190,
        height: 120,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        margin: 3,
        marginBottom: 5,
        elevation: 20,

    },

    textButton: {
        textAlign: 'left',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',

    },

});