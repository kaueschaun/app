import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Solicita() {
    

    return (
        
        <View style={styles.container}>
            <View style={styles.contTwo}>
                <View style={styles.viewID}>

                    <Text style={styles.txtID}>ID do serviço</Text>

                </View>
               <View style={styles.viewValue}>
                    <Text style={styles.txtValue}>
                        Valor do Orçamento
                    </Text>
                    <TextInput placeholder={'R$ 00,00'} style={styles.inputValue}></TextInput>
               </View>
                
                <View style={[{alignItems: 'center'}]}>
                    <Text style={styles.txtTaxa}>
                        Taxa
                    </Text>
                    <TextInput placeholder={'R$ 00,00'} style={styles.inputValue}>

                    </TextInput>

                </View>
                
            </View>
            <View style={styles.viewEnvia}>
                <TouchableOpacity style={styles.envia} onPress={() => navigation.navigate("Solicita")}>
                    <Text style={styles.textEnvia} >Enviar Orçamento</Text>
                </TouchableOpacity>
            </View>

            
            
                
        </View>
        
        
        
        
        
        
        /*<View style={styles.container}>

            <View style={styles.card}>
                    <Text style={styles.titleCard} > Pintar Paredes </Text>

                <View style={styles.descricao}>
                    <Text style={styles.header}> ID do serviço </Text>
                    <View style={styles.orcamento}>    
                        <Text style={styles.header}>Valor do Orçamento</Text>   
                    </View>  
                    <View>
                    <TextInput style={styles.input} placeholder={'R$ 00,00'}/>  
                        
                    </View>
                    <View></View>
                    <View justifyContent={'center'} alignItems={'center'}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Orçamento Enviado')}>
                            <Text style={styles.textButton}>Enviar Orçamento</Text>
                        </TouchableOpacity> 
                    </View> 
                </View>
            </View>    
        </View>*/

    )
}


