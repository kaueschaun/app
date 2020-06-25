import React from 'react';
import { KeyboardAvoidingView, ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
export default function Register() {

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


