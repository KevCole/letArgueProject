import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlayScreen from './PlayScreen'
import UTplayScreen from './UnTimed Components/UT_PlayScreen'

export default class extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Play')}>
                    Timed Play
                </Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Untimed')}>
                    Untimed Play
                </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        padding: 25,
        paddingTop: 200,


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