import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    listItemText: {
        fontSize: 14,
        color: 'black',
        width: 210,
        marginLeft: 10,
        margin: 5,
    },

    listItemHeader: {
        fontSize: 16,
        color: 'red',
        margin: 5
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    cardDesc:{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        marginLeft: 25,
        margin: 10, 
        width: 240
    },
    
   envia: {
        backgroundColor: 'black',
        width: '90%',
        height: 60,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        elevation: 20,
   },
   viewEnvia: {
    justifyContent: 'center',
    alignItems: 'center'
   },
   textEnvia : {
    color: 'white',
    fontSize: 16
   },

   textButton : {
    color: 'white'
   },

    textDesc:{
        fontSize: 18,
        padding: 10,
    },

    card: {
        width: 390,
        height: 'auto',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        marginBottom: 10,
        elevation: 10,

    },

    descricao: {
        width: 340,
        height: 'auto',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        marginBottom: 10,
        elevation: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
   
   
    button: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
      },

    textButton: {
        width: 80,
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },

    avatar:{
        width: 130,
        height: 130,
        marginTop: 10,
        borderRadius: 15,
    },

    icons:{
        width: 60,
        height: 60,
        marginTop: 10,
    },

    imgServico:{
        width: 310,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
       
    },

});