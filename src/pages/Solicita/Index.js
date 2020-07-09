import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Solicita({ navigation }) {
    const [tax, setTax] = useState(20);
    const [value, setValue] = useState(null);
    const [status, setStatus] = useState(null);

    
    
   const doBugets = async () => {

       const body = {
           professional_id: window.professional_id,
           solicitation_id: window.solicitation_id,
           value,
           tax,
           status: "enviado"
           
        }

        try {
            api.post('/budgets', body, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI1NzM1OCIsImlhdCI6MTU5NDI2ODk0MSwiZXhwIjoxNTk0MzU1MzQxfQ.uq6YwzY2L-ltZc1uxnUPfxPvGazLz95FwC-9-OabKcU`
                }
                
            }).then(response => {
                Alert.alert('Sucesso', 'Orçamento enviado com sucesso!')
                navigation.navigate("Home")
            })
            
        } catch (error){
            console.log(error)
        }
        
    }

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
                    <TextInput placeholder={'R$ 00,00'} style={styles.inputValue} onChangeText={(e) => { setValue(e) }}></TextInput>
                </View>

            </View>
            <View style={styles.viewEnvia}>
                <TouchableOpacity style={styles.envia} onPress={() =>  doBugets()}>
                    <Text style={styles.textEnvia}>Enviar Orçamento</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}


