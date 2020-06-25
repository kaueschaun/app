import React from 'react';
import { View, Image} from 'react-native';
import styles from './styles';

export default function Sobre() {
    return(
    <View style={styles.container}>
        <View flexDirection={'row'}>
            <Image source={require('../../assets/rbs_logo.png')} style={styles.logo}/>
            <Image source={require('../../assets/dp_logo.jpg')} style={styles.logo}  borderRadius={50}/>
        </View>
    </View>
    )
}
  

