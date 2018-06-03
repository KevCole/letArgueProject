import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import CheckBox from 'react-native-modest-checkbox'
import reject from 'lodash/reject'


removeCategory = () =>{
    alert("huh")
}

export default class extends Component {
    render() {
        return (
            <View>
                <Text>Movies</Text>
                <CheckBox
                    label='Comedy'
                    onChange={(checked) => console.log('Checked!')}
                    checked={true}
                />
                <CheckBox
                    label='Horror'
                    onChange={(checked) => console.log('Checked!')}
                    checked={true}
                />
                <CheckBox
                    label='Drama'
                    onChange={(checked) => console.log('Checked!')}
                    checked={true}
                />
                <CheckBox
                    label='Action'
                    onChange={(checked) => console.log('Checked!')}
                    checked={true}   
                />
                <CheckBox
                    label='Sci-fi'
                    onChange={(checked) => console.log('Checked!')}
                    checked={true}   
                />


            </View>
        )
    }
}



const styles = StyleSheet.create({

})