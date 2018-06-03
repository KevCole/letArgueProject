import { dimensions, colors, fonts } from './base';
import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#4861C9',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',




    },
    text: {
        alignItems: "center",
        fontFamily: fonts.primary,
        fontSize: 30,
        color:'#F0FFF0',
        justifyContent: "center"

    },

})