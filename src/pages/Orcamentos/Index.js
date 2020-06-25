import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default function Orcamentos({ navigation }) {
   
    return (
    <ScrollView style={styles.container}>

        <View style={styles.card}>
            <View justifyContent={'space-between'} flexDirection={'row'}>
                <Text style={styles.header} >Serviço - Pintura</Text>
               
                <TouchableOpacity style={styles.btnDelete}>
                    <Image source={require('../../assets/delete.png')} style={styles.icons} />
                </TouchableOpacity>              
            </View>
 
            <View justifyContent={'space-between'} flexDirection={'row'}>
                <Image source={require('../../assets/exPintura.jpg')} style={styles.imgServico} />
                 <TouchableOpacity style={styles.btnDelete} onPress={() => navigation.navigate("Detalhe")}>
                    <Image source={require('../../assets/detalhes.png')}style={styles.icons}/>
                </TouchableOpacity> 
            </View>               
        </View>
    
        <View style={styles.card}>
          
            <View justifyContent={'space-between'} flexDirection={'row'}>
                    <Text style={styles.header} >Serviço - Troca de Tomadas</Text>
               
                    <TouchableOpacity style={styles.btnDelete}>
                        <Image source={require('../../assets/delete.png')} style={styles.icons} />
                    </TouchableOpacity>              
            </View>
 
            <View justifyContent={'space-between'} flexDirection={'row'}>
                <Image source={require('../../assets/exTomadas.jpg')} style={styles.imgServico} />
                 <TouchableOpacity style={styles.btnDetalhes} onPress={() => navigation.navigate("Detalhe")}>
                    <Image source={require('../../assets/detalhes.png')} style={styles.icons}/>
                </TouchableOpacity> 
            </View>               
        </View>
           
            
    </ScrollView>

)
}

