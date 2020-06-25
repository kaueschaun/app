import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput,
    Animated,
    Keyboard,
    Alert
} from 'react-native';
import styles from './styles';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { LongPressGestureHandler } from 'react-native-gesture-handler';





export default function Login({ navigation }) {


    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 70 }));
    const [logo] = useState(new Animated.ValueXY({ x: 160, y: 160 }));
    //const history = useHistory();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    function validade () {
        if(!email && !password) {
           Alert.alert('Falha no login', 'E-mail ou senha incorreto')
            return false
        }
        if(!email) {
            Alert.alert('Falha no login', 'Preencha o E-mail')
            return false
        }
        if(!password) {
            Alert.alert('Falha no login', 'Preencha sua senha')
            return false
        }
        return true
    }

    async function doLogin() {

        if(validade() !== false) {

            const payload = {
                auth: {
                 username: 'SiasFranco69@live.com',
                 password: 'silas-franco123'
                }
            
            } 
            try {
                const response = await api.get('/login', payload);
                //await AsyncStorage.setItem('token',response.data.token.toString());
                //await AsyncStorage.setItem('cliNome', response.data.cliNome.toString());
                //await AsyncStorage.setItem('client_id', response.data.client_id.toString());
                navigation.navigate('Home') 
               
                
                
                
            } catch (error) {
            Alert.alert('Falha no Login','Login não realizado')
        }
        
        
    }
}

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.spring(offset.y, {
            toValue: 0,
            speed: 3,
            bounciness: 15,
            useNativeDriver: true,
        }).start();
    }, []);


    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 80,
                duration: 100,
                useNativeDriver: false,
            }), Animated.timing(logo.y, {
                toValue: 80,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 160,
                duration: 100,
                useNativeDriver: false,
            }), Animated.timing(logo.y, {
                toValue: 160,
                duration: 100,
                useNativeDriver: false,
            })
        ]).start();
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <ImageBackground source={require('../../assets/back3.jpg')} style={styles.backImage} opacity={0.5}>
                <View style={styles.containerLogo}>
                    <Animated.Image
                        style={{
                            width: logo.x,
                            height: logo.y,

                        }}
                        source={require('../../assets/icon.png')} />
                </View>
                <Animated.View style={[
                    styles.container,
                    {
                        transform: [
                            { translateY: offset.y }
                        ]
                    }
                ]}>
                    <View marginRight={40} marginLeft={15} flexDirection="row">
                        <Image source={require('../../assets/user.png')} style={styles.icons} />
                        <TextInput style={styles.input}
                            placeholder="E-MAIL"
                            autoCorrect={false}
                            onChangeText={(e) => { setEmail(e) }}
                        />
                    </View>

                    <View marginRight={40} marginLeft={15} flexDirection="row">
                        <Image source={require('../../assets/email.png')} style={styles.icons} />
                        <TextInput style={styles.input}
                            placeholder="SENHA"
                            autoCorrect={false}
                            onChangeText={(e) => { setPassword(e) }}
                        />
                    </View>


             

                    <TouchableOpacity style={styles.btnSubmit} onPress={() => doLogin()}>
                        <Text style={styles.textButtonS} >ACESSAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.textButtonR}>TRABALHE COM A GENTE</Text>
                    </TouchableOpacity>


                </Animated.View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

