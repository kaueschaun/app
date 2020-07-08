import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function Solicita({ navigation }) {
    const [tax, setTax] = useState(null);
    const [value, setValue] = useState(null);
    const [status, setStatus] = useState(null);
   const doBugets = async () => {

       const body = {
           professional_id: 1,
           solicitation_id: 1,
           value,
           tax,
           status: "open"
           
        }

        try {
            api.post('/budgets', body, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI1NzM1OCIsImlhdCI6MTU5NDE5MjY4NCwiZXhwIjoxNTk0Mjc5MDg0fQ.sHSbAbQVvQBrSh92YzGOdQEU2Bg1WcAEfAtbB_CExCY`
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

                <View style={[{ alignItems: 'center' }]}>
                    <Text style={styles.txtTaxa}>
                        Taxa
                    </Text>
                    <TextInput placeholder={'R$ 00,00'} style={styles.inputValue} onChangeText={(e) => { setTax(e) }}>

                    </TextInput>

                </View>

            </View>
            <View style={styles.viewEnvia}>
                <TouchableOpacity style={styles.envia} onPress={() =>  doBugets()}>
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


