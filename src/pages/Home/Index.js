import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput,
    Animated,
    Keyboard,
} from 'react-native';


function Home({ navigation }) {

    
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 70 }));
    const [logo] = useState(new Animated.ValueXY({ x: 160, y: 160 }));

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
          <ImageBackground source={require('/fatec/FacilitaPRO/app/img/back3.jpg')} style={styles.backImage} opacity={0.5}>
            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y,
                        
                    }}
                    source={require('/fatec/FacilitaPRO/app/img/icon.png')}/>
            </View>
            <Animated.View style={[
                styles.container,
                {
                    transform: [
                        { translateY: offset.y }
                    ]
                }
            ]}>
                <TextInput style={styles.input}
                    placeholder="E-MAIL"
                    maxLength={32}
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput style={styles.input}
                    placeholder="SENHA"
                    secureTextEntry={true}
                    maxLength={10}
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate("Service")}>
                    <Text style={styles.textButtonS}>ACESSAR</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.textButtonR}>TRABALHE COM A GENTE</Text>
                </TouchableOpacity>


            </Animated.View>
</ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 55,
    },

    backImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 75,
    },

    input: {
        width: '90%',
        height: 50,
        marginBottom: 15,
        color: 'black',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },

    btnSubmit: {
        backgroundColor: '#000',
        width: '90%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 7,

    },

    textButtonS: {
        fontSize: 22,
        color: '#FFFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnRegister: {
        marginTop: 10,
    },

    textButtonR: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },

});

export default Home;