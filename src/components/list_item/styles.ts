import { StyleSheet } from 'react-native';
import { heightToDP, widthToDP } from 'react-native-responsive-screens'


const styles = StyleSheet.create({
    container: {
        height: heightToDP('20%'),
        width: widthToDP('95%'),
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 10,
        borderRadius: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 10,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
    },
    value: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
    },
    property: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray',
    },
    informations: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})
export default styles