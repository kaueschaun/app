import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default function Parceiros() {
    return(
        <View style={styles.container}>
            <View flexDirection='row'> 
              <Image source={require('../../assets/ucpel_logo.png')}style={styles.logo}/>
              <Image source={require('../../assets/ciemsul_logo.png')} style={styles.logo}/>
            </View>
              <Image source={require('../../assets/senac_logo.png')} style={styles.logo}/>
        </View>
    )
}


