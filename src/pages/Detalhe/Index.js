import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';


function Detalhe() {
   
    return (
        <ScrollView style={styles.container}>

<View style={styles.card}>
<View flexDirection="row">
    <Image source={require('/fatec/FacilitaPRO/app/img/avatarCli.png')} style={styles.avatar} />
    <View marginTop={15} marginLeft={20}>
    <Text style={styles.header} > Fulano da Silva</Text>
    <Text style={styles.header} > Rua Prof. Araújo</Text>
    <Text style={styles.header} > (53) 992584845</Text>
    </View>
 </View>

<View marginTop={10} flexDirection={'row'}>
    
      <View justifyContent={'center'} alignItems={'center'}>    
        <TouchableOpacity style={styles.button}>
        <Image source={require('/fatec/FacilitaPRO/app/img/chat.png')} style={styles.icons} />
        <Text style={styles.textButton}>
        Enviar mensagem
        </Text>
        </TouchableOpacity>
        </View>  
       
        <View style={styles.cardDesc}>
        <Text style={styles.listItemHeader}> Atenção! </Text>
              <Text style={styles.listItemText}>
               É importante que todas as informações estejam dentro da plataforma, pois, assim 
               é possivel manter a segurança necessária para todos.
         </Text>
         <Text style={styles.listItemText}>Obrigado por manter a parceria com a FacilitaPRO! </Text>
         </View>
    </View> 

    <View style={styles.descricao}>
    <View flexDirection={'row'}>
    <Text style={styles.header} > ID do serviço</Text>
    <Text style={styles.header} > Pintar Paredes</Text></View>
    <Text style={styles.header}> Descrição: </Text>
    <Text style={styles.textDesc}> Pintar paredes internas de um quarto com 9 m2.</Text>
    <Text style={styles.textDesc}> *Há obstáculos</Text>
    <Image source={require('/fatec/FacilitaPRO/app/img/exPintura.jpg')} style={styles.imgServico} />

    </View>


</View>    
        </ScrollView>

    )
}

export default Detalhe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    listItemText: {
        fontSize: 14,
        color: 'black',
        width: 210,
        marginLeft: 10,
        margin: 5,
    },

    listItemHeader: {
        fontSize: 16,
        color: 'red',
        margin: 5
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    cardDesc:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        marginLeft: 25,
        margin: 10, 
        width: 240
    },

    textDesc:{
        fontSize: 18,
        padding: 10,
    },

    card: {
        width: 390,
        height: 'auto',
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
        width: 340,
        height: 'auto',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        marginBottom: 10,
        elevation: 10,
        borderWidth: 2,
        borderColor: 'black',
    },

    button: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
      },

    textButton: {
        width: 80,
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },

    avatar:{
        width: 130,
        height: 130,
        marginTop: 10,
        borderRadius: 15,
    },

    icons:{
        width: 60,
        height: 60,
        marginTop: 10,
    },

    imgServico:{
        width: 310,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
       
    },

});