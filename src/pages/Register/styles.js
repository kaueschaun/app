import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    //Title/Título --------------------------------------------------------------------------------------
    title: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //--------------------------------------------------------------------------------------------------

    //Card/Cartão ----------------------------------------------------------------------------------
    card: {
        width: 410,
        height: 'auto',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCard: {
        fontSize: 22,
        textAlign: 'center',
    },
    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    subtitleCard: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    //--------------------------------------------------------------------------------------------------

    //Button/Botão -------------------------------------------------------------------------------------
    button: {
        backgroundColor: '#FFFB1E',
        width: '90%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 7,
        elevation: 5,
    },

    textButton: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    //------------------------------------------------------------------------------------------------

    //Input/Entrada ----------------------------------------------------------------------------------
    input: {
        width: 330,
        height: 50,
        marginBottom: 8,
        color: 'black',
        fontSize: 17,
        padding: 5,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    //------------------------------------------------------------------------------------------------
});