import { StyleSheet } from 'react-native';
import { heightToDP, widthToDP } from 'react-native-responsive-screens'

const styles = StyleSheet.create({
    container: {
        height: heightToDP('100%'),
        width: widthToDP('100%'),
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    listContainer: {
        height: heightToDP('80%'),
        width: widthToDP('100%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: heightToDP('5%'),
        width: widthToDP('80%'),
        margin: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    button: {
        width: widthToDP('80%'),
    },
})
export default styles