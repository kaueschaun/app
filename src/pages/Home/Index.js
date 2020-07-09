import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import api from '../../services/api';
import styles from './styles';
import { Container, Tab, Tabs, Text, Button } from 'native-base';
//import AsyncStorage from '@react-native-community/async-storage';

export default function Home({ navigation }) {


    const [solicitation, setSolicitation] = useState(null);
    const [budgets, setBudgets] = useState(null);

    const apertandoABraba = (el) => {
        window.professional_id = el.address.professional_id;
        window.solicitation_id = el.id;
        console.log(el)
        navigation.navigate("Solicita")
    }

    const getToken = async () => {
        //const userToken = await AsyncStorage.getItem('token');


        api.get(`/solicitations`, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI1NzM1OCIsImlhdCI6MTU5NDI2ODk0MSwiZXhwIjoxNTk0MzU1MzQxfQ.uq6YwzY2L-ltZc1uxnUPfxPvGazLz95FwC-9-OabKcU`
            }
        })
            .then(response => {
                setSolicitation(response.data.reverse())

            })

    }
    useEffect(() => {
        if (!solicitation) {
            getToken();
        }

    });

    api.get(`/budgets`, {
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGYiOiI1NzM1OCIsImlhdCI6MTU5NDI2ODk0MSwiZXhwIjoxNTk0MzU1MzQxfQ.uq6YwzY2L-ltZc1uxnUPfxPvGazLz95FwC-9-OabKcU`
        }
    })
        .then(response => {
            setBudgets(response.data)

        })


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
                    <FlatList style={styles.flat}
                        data={solicitation}
                        keyExtractor={solicitation => String(solicitation.id)}
                        showsVerticalScrollIndicator={false}

                        onEndReachedThreshold={0.2}

                        renderItem={({ item: solicitation }) => (
                            <View style={styles.divSoli}>
                                <View>
                                    <Text style={styles.id}>Descrição de Serviço</Text>
                                    <Text style={styles.incidentValue}>{solicitation.description}</Text>
                                    <Text style={styles.id}>Status</Text>
                                    <Text style={styles.txtStatus}>{solicitation.id}</Text>
                                    <Text style={styles.id}>Endereço</Text>
                                    <Text style={styles.txtStreet}>Rua: {solicitation.address.street}</Text>
                                    <Text style={styles.foto}>Foto do Serviço</Text>
                                    <View style={styles.divImg}>
                                        <Image style={styles.img2} source={{ uri: `${solicitation.photoUrl}` }} />

                                    </View>
                                </View>
                                <Button
                                    style={styles.Button}
                                    onPress={() => apertandoABraba(solicitation)}
                                >
                                    <Text style={styles.txtOrca}>Enviar Orçamento</Text>
                                </Button>
                            </View>


                        )}
                    />

                </Tab>

                <Tab heading="Orçamentos">

                </Tab>
            </Tabs>
        </Container>

    )

}