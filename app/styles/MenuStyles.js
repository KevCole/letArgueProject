import { dimensions, colors, fonts } from './base';
import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#4861C9',
    
    },
    text: {
        fontFamily: fonts.primary,
        fontSize: 50,
        color:'#F0FFF0',
        
    },
})