import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Parceiros() {
    return(
    <View style={styles.container}>
             <View flexDirection='row'> 
              <Image source={require('/fatec/FacilitaPRO/app/img/ucpel_logo.png')} style={styles.logo}/>
              <Image source={require('/fatec/FacilitaPRO/app/img/ciemsul_logo.png')} style={styles.logo}/>
              </View>
              <Image source={require('/fatec/FacilitaPRO/app/img/senac_logo.png')} style={styles.logo}/>
 </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    logo:{
        width: '50%',
        height: 100,
        marginTop: 10,
    },
});   

export default Parceiros;