import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';


function Solicita() {
   
    return (
        <View style={styles.container}>

<View style={styles.card}>
   <Text style={styles.titleCard} > Pintar Paredes </Text>

    <View style={styles.descricao}>
    <Text style={styles.header}> ID do serviço </Text>
    <View style={styles.orcamento}>    
     <Text style={styles.header}>Valor do Orçamento</Text>   
     <TextInput style={styles.input} placeholder={'R$ 00,00'}/>  
     <Text style={styles.taxa}>Taxa 15%</Text> 
     <Text style={styles.header}>Valor Total do Orçamento</Text> 
     <TextInput style={styles.input} placeholder={'R$ 00,00'}/>   
     </View>  
     <View justifyContent={'center'} alignItems={'center'}>
     <TouchableOpacity style={styles.button} onPress={() => alert('Orçamento Enviado')}>
       <Text style={styles.textButton}>Enviar Orçamento</Text>
    </TouchableOpacity> 
    </View> 
</View>
</View>    
        </View>

    )
}

export default Solicita;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    titleCard: {
        width: '100%',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,   
    },

    card: {
        width: '95%',
        height: '95%',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        marginBottom: 10,
        elevation: 10,

    },

    descricao: {
        flex: 1,
        width: 340,
        height: 370,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 8,
        marginBottom: 10,
        elevation: 10,
        borderWidth: 2,
        borderColor: 'black',
    },

    button: {
        backgroundColor: 'black',
        width: 120,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        marginTop: 15,
        borderRadius: 30,
        elevation: 20,
      },

    textButton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%', 
        height: 60,
        elevation: 8,
        borderRadius: 15,
       fontSize: 20,
       color: 'black',
       margin: 15,
       textAlign: 'center',
       color: 'black',
    },

    taxa:{
        fontSize: 18,
        fontWeight: 'bold',
    },

    orcamento:{
        justifyContent: 'center',
        alignItems: 'center'
    },
});