import {dimensions,colors,fonts} from './base';
import {StyleSheet,Dimensions} from 'react-native';
import questions from '../questions/questions.json'



export const styling = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#323c41',
        backgroundColor:colors.background,
        height:dimensions.fullHeight,
        width: dimensions.fullWidth


    },
    question:{
        fontSize:18,
        fontWeight: 'bold',
        fontFamily:fonts.primary,
        color:'#ffffff',
        
        textAlign:'left'
    },

    title:{
        color:'white',
        fontSize:19,
        fontWeight: 'bold',
        fontFamily: fonts.primary,
    },

    underline:{
        height:2,
        width:50,
        backgroundColor:'#D0BB57',
        marginBottom: 20
    },


    card:{
        width:350,
        height:350,
        padding:30,
        borderRadius:20,
        backgroundColor:'#5C7A88',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset:{width:30,height:30},
        shadowOpacity:3,
        shadowRadius:20

    }

})