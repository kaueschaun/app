import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


function Services({ navigation }) {
    return (
        <View style={styles.container}>  
      <Image source={require('/fatec/FacilitaPRO/app/img/logo.png')} style={styles.logo}/>
     <Text style={styles.subTitleCard}>Te ajudamos a ganhar dinheiro por conta própria!</Text>
    
  <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Solicita")}>
                    <Text style={styles.textButton} >Minhas Solicitações</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Orcamentos")}>
                    <Text style={styles.textButton} >Meus Orçamentos</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card} flexDirection={'row'}>
            <TouchableOpacity style={styles.btnInformation} onPress={() => navigation.navigate("Sobre")}>
            <Image source={require('/fatec/FacilitaPRO/app/img/sobre.png')} style={styles.iconSobre} />
                 <Text style={styles.textInformation} >Sobre Nós</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.btnInformation} onPress={() => navigation.navigate("Parceiros")}>
            <Image source={require('/fatec/FacilitaPRO/app/img/parceiros.png')} style={styles.iconParceiros} />
                    <Text style={styles.textInformation} >Parceiros</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Services;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
       backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    titleCard: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    subTitleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    iconSobre:{
        width: 40,
        height: 40,
        marginTop: 15,
        marginLeft: 60
    },
  
    iconParceiros:{
        width: 40,
        height: 40,
        marginTop: 15,
        marginLeft: 55
    },

    button: {
        width: 340,
        height: 100,
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

    btnInformation:{
        width: 170,
        height: 60,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        marginBottom: 10,
    },

    textButton: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',

    },

    textInformation: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

    },

    logo:{
        margin:10,
         width: 380,
        height: 80
    },

});