import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function Login() {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <TextInput style={styles.input} placeholder='Digite seu e-mail'>
            </TextInput>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='Digite sua senha' />
            <TouchableOpacity style={styles.button} onPress={() => alert('Clicou em mim')}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: 300,
        height: 60,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 30,
    },

    textButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

    input: {
        width: 350,
        height: 70,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 5,
        fontSize: 18,
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
    },

});

export default Login;