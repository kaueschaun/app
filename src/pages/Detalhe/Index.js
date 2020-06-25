import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import axios from 'axios';

export default function Detalhe({ navigation} ) {
return (
    <ScrollView style={styles.container}>

        <View style={styles.card}>
            <View flexDirection="row">
                <Image source={require('../../assets/avatarCli.png')} style={styles.avatar}/>
               
                <View marginTop={15} marginLeft={20}>
                    <Text style={styles.header} > Fulano da Silva</Text>
                    <Text style={styles.header} > Rua Prof. Araújo</Text>
                    <Text style={styles.header} > (53) 992584845</Text>
                   
                </View>
               
            </View>

            <View marginTop={10} flexDirection={'row'}>
    
                <View justifyContent={'center'} alignItems={'center'}>    
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/chat.png')} style={styles.icons} />
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
                    <Text style={styles.header}>ID do serviço</Text>
                    <Text style={styles.header}> Pintar Paredes</Text>
                </View>
            
                <Text style={styles.header}>Descrição: </Text>

                <Text style={styles.textDesc}>Pintar paredes internas de um quarto com 9 m2.</Text>

                <Text style={styles.textDesc}>*Há obstáculos</Text>
            
                <Image source={require('../../assets/exPintura.jpg')} style={styles.imgServico} />

            </View>

            <View style={styles.viewEnvia}>
                <TouchableOpacity style={styles.envia} onPress={() => navigation.navigate("Solicita")}>
                    <Text style={styles.textEnvia} >Enviar Orçamento</Text>
                </TouchableOpacity>
            </View>
        </View>    
           
    </ScrollView>

    )
}




