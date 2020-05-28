import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Sobre() {
    return(
    <View style={styles.container}>
              <View flexDirection={'row'}>
              <Image source={require('/fatec/FacilitaPRO/app/img/rbs_logo.png')} style={styles.logo}/>
              <Image source={require('/fatec/FacilitaPRO/app/img/dp_logo.jpg')} style={styles.logo}  borderRadius={50}/>
              </View>
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
        width: '48%',
        height: 120,
       },
});   

export default Sobre;