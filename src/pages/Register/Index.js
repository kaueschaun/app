import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';

function Register() {

    return (
        <ScrollView>
            <KeyboardAvoidingView  style={styles.container}>
                <View style={styles.Card}>

                    <Text style={styles.titleCard}>Dados Pessoais</Text>
                  
                    <TextInput style={styles.input} placeholder={"NOME"} />
                    <TextInput style={styles.input} placeholder={"SOBRENOME"} />
                    <TextInput style={styles.input} placeholder={"DATA DE NASC."} />
                    <TextInput style={styles.input} placeholder={"CPF"} />
                    <TextInput style={styles.input} placeholder={"E-MAIL"} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder={"SENHA"} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder={"CONFIRME A SENHA"} />

                </View>

                <View style={styles.card}>

                    <Text style={styles.titleCard}>Endereço</Text>

                    <TextInput style={styles.input} value={"Pelotas"} />
                    <TextInput style={styles.input} placeholder={"CEP"}/>
                    <TextInput style={styles.input} placeholder={"RUA"} />
                    <TextInput style={styles.input} placeholder={"Nº"} />
                    <TextInput style={styles.input} placeholder={"COMPLEMENTO"} />

                </View>
               
                <TouchableOpacity style={styles.button} onPress={() => alert('Cadastro Concluído')}>
                    <Text style={styles.textButton}>CADASTRAR</Text>
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
        backgroundColor: '#FFF'
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
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: '#FFFB1E',
        width: '90%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 7,
        elevation: 5,
    },

    textButton: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    //------------------------------------------------------------------------------------------------

    //Input/Entrada ----------------------------------------------------------------------------------
    input: {
        width: 330,
        height: 50,
        marginBottom: 8,
        color: 'black',
        fontSize: 17,
        padding: 5,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    //------------------------------------------------------------------------------------------------
});