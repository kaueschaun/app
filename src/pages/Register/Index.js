import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View, TextInput, Text, TouchableOpacity, } from 'react-native';
//import { Card } from 'react-native-elements';

function Register() {


    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior
                style={styles.container}>
                <View style={styles.Card}>

                    <Text style={styles.titleCard}>Dados Pessoais</Text>

                    <TextInput style={styles.input} placeholder={"Nome"} />
                    <TextInput style={styles.input} placeholder={"Sobrenome"} />
                    <TextInput style={styles.input} placeholder={"Data de Nasc."} />
                    <TextInput style={styles.input} placeholder={"E-mail"} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder={"Senha"} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder={"Confirme a senha"} />

                </View>

                <View style={styles.card}>

                    <Text style={styles.titleCard}>Endereço</Text>

                    <TextInput style={styles.input} value={"Pelotas"} />
                    <TextInput style={styles.input} placeholder={"CEP"} />
                    <TextInput style={styles.input} placeholder={"Rua"} />
                    <TextInput style={styles.input} placeholder={"Nº"} />
                    <TextInput style={styles.input} placeholder={"Complemento"} />

                </View>

                <TouchableOpacity style={styles.button} onPress={() => alert('editar')}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default Register;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Title/Título --------------------------------------------------------------------------------------
    title: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //--------------------------------------------------------------------------------------------------

    //Card/Cartão ----------------------------------------------------------------------------------
    card: {
        width: 410,
        height: 'auto',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
    },
    textCard: {
        fontSize: 22,
        textAlign: 'center',
    },
    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    subtitleCard: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    //--------------------------------------------------------------------------------------------------




    //Button/Botão -------------------------------------------------------------------------------------
    button: {
        width: 380,
        height: 70,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 30,
        marginBottom: 10,
    },

    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    //------------------------------------------------------------------------------------------------

    //Input/Entrada ----------------------------------------------------------------------------------
    input: {
        height: 70,
        width: 350,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 5,
        fontSize: 18,
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
    },
    //------------------------------------------------------------------------------------------------
});