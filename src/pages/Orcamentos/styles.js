import { StyleSheet } from  'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 60,
        paddingTop: 10,
        paddingBottom: 20,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },

    listItemText: {
        fontSize: 24,
        color: '#000000',
        marginBottom: 10,
        color: 'black',
    },

    listItemHeader: {
        fontSize: 16,
        color: '#000000',
    },

    titleCard: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },

    card: {
        width: 380,
        height: 'auto',
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        margin: 20,
        marginBottom: 10,
        elevation: 10,

    },

    button: {
        backgroundColor: '#38C600',
        width: 80,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 30,
        elevation: 5,
    },
    btnRejeitado: {
        backgroundColor: '#F60703',
        width: 100,
        height: 30,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 30,
        elevation: 5,
    },

    textButton: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',

    },

    textButtonAtivo: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',

    },
    textButtonRejeitado: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#212121',

    },

    icons:{
        width: 30,
        height: 30,
        marginTop: 10,
    },

    imgServico:{
        width: 300,
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    coluna:{
        marginRight: 10, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },

    btnDetalhes:{
        
    }
});