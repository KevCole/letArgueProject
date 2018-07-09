import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlayScreen from './PlayScreen'
import UTplayScreen from './UnTimed Components/UT_PlayScreen'

export default class extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#e94046'
        }}
    render() {
        return (
            <ImageBackground source={ require( '../images/orange_yellow.jpg')} style={styles.screen}>
                <TouchableOpacity style={styles.viewWidth} >
                <Image style={styles.stopwatch} source={require('../images/stopwatch_yellow.png')} onPress={() => this.props.navigation.navigate('Play')}/>
                  <Text style={styles.text} onPress={() => this.props.navigation.navigate('Play')}>Against The Clock</Text>
                  
                  
                  </TouchableOpacity> 
                  <TouchableOpacity style={styles.viewWidth} >
                  <Image style={styles.infinite} source={require('../images/infinity_yellow.png')} onPress={() => this.props.navigation.navigate('Untimed')} />
                    <Text style={styles.text} onPress={() => this.props.navigation.navigate('Untimed')}>Endless Arguments</Text>
                    
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F35555',
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        
    
      },
    container: {
        flex: 1,
        alignItems: "center",
       
        
    },
    text: {
        fontFamily: "Noteworthy",
        fontSize: 40,
        paddingBottom:100,
        color:"white",
        marginTop:155
       
    },
   
    view:{
        fontFamily: "Helvetica-Bold",
        fontSize: 50,
        color:"white",

        paddingBottom:90,
        marginLeft:40
    },
    viewWidth:{
       
        marginBottom:-30
    },

    infinite:{
        marginLeft:130,
        marginBottom:-175
        
    },
    stopwatch:{
        marginLeft:130,
        marginBottom:-160
    }
   
})


const RootStack = StackNavigator(
  {
    Play: {
      screen: PlayScreen
    },
    Untimed: {
      screen: UTplayScreen
    },
  }
)