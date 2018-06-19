import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlayScreen from './PlayScreen'
import UTplayScreen from './UnTimed Components/UT_PlayScreen'

export default class extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#FEF84F'
        }}
    render() {
        return (
            <ImageBackground source={ require( '../images/yellow_orange.jpg')} style={styles.screen}>
                <TouchableOpacity >
                  <Text style={styles.text} onPress={() => this.props.navigation.navigate('Play')}> Free For All </Text>
                </TouchableOpacity>
                <TouchableOpacity >
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
       
        justifyContent: 'center',
    
      },
    container: {
        flex: 1,
        flexDirection: 'column',

        padding: 25,
        paddingTop: 200
    },
    text: {
        alignItems: "center",
        fontFamily: 'Helvetica',
        fontSize: 30,
        justifyContent: "center"

    },
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