import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import api from '../../services/api';
import styles from './styles';
import { Container, Tab, Tabs, Text, Button } from 'native-base';
//import AsyncStorage from '@react-native-community/async-storage';

export default function Home({ navigation }) {


    const [solicitation, setSolicitation] = useState(null);


    const getToken = async () => {
        //const userToken = await AsyncStorage.getItem('token');


        api.get(`/solicitations`, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI1NzM1OCIsImlhdCI6MTU5NDE4OTAyMiwiZXhwIjoxNTk0Mjc1NDIyfQ.Zoh8meH6eWc7LKfwQ4znbIIeRINmwD8JxwXB6jjMkqY`
            }
        })
            .then(response => {
                setSolicitation(response.data)
                console.log(solicitation)
            })

    }
    useEffect(() => {
        if (!solicitation) {
            getToken();
        }

    });



    return (


        <Container style={styles.contAll} >
            <View style={styles.viewOne}>
                <View style={styles.viewImg}>
                    <Image source={require('../../assets/avatarCli.png')} style={styles.img} />
                    <View style={styles.viewBtn}>

                        <Text style={styles.txtName}>Nome: Fulano Silva</Text>

                        <TouchableOpacity style={styles.btnPerfil}>
                            <Text style={styles.txtBtP}>Ver Perfil</Text>
                        </TouchableOpacity></View>

                </View>

            </View>
            <Tabs initialPage={0}>
                <Tab heading="Solicitações" >
                    {/* <View style={styles.card}>
                        <View justifyContent={'space-between'} flexDirection={'row'}>
                            <Text style={styles.header} ></Text>
                        <TouchableOpacity style={styles.btnDelete}>
                            <Image source={require('../../assets/delete.png')} style={styles.icons} />
                        </TouchableOpacity>              
                    </View> */}
                    <View style={[styles.container, { backgroundColor: '#345D7E', width: 412 }]}>
                <Text style={{color: "black"}}>Cidade {solicitation && solicitation[0].city}</Text> 
                        
                        
                        <SafeAreaView style={{ height: 200 }}>
                            <FlatList
                                data={solicitation}
                                keyExtractor={item => item.id}
                                numColumns={1}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ maxWidth: 400 }}>
                                            <Button style={{ margin: 3, flexDirection: 'column', height: 30, width: 250, borderRadius: 10 } } onPress={() => navigation.navigate("Solicita")}>
                                                <Text style={{ fontSize: 12, height: 30 }}>{item.address.city}</Text>
                                            </Button>
                                          
                                        </View>
                                    );
                                }}
                            />
                        </SafeAreaView>

                    </View>
                    {/* <View justifyContent={'space-between'} flexDirection={'row'}>
                        <Image source={require('../../assets/exPintura.jpg')} style={styles.imgServico} />
                        <TouchableOpacity style={styles.btnDelete} onPress={() => navigation.navigate("Detalhe")}>
                             <Image source={require('../../assets/detalhes.png')}style={styles.icons}/>
                        </TouchableOpacity> 
                        </View>               
                    </View> */}
                </Tab>

                <Tab heading="Orçamentos">



                </Tab>
            </Tabs>
        </Container>






        /*<View style={styles.container}>  
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
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
                    <Image source={require('../../assets/sobre.png')} style={styles.iconSobre} />
                    <Text style={styles.textInformation} >Sobre Nós</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnInformation} onPress={() => navigation.navigate("Parceiros")}>
                    <Image source={require('../../assets/parceiros.png')} style={styles.iconParceiros} />
                    <Text style={styles.textInformation} >Parceiros</Text>
                </TouchableOpacity>
            </View>

        </View>*/


    )
}
