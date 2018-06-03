
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import moment from 'moment'

function updateState(text){
    this.setState({text})
}

//passing state from parent to child
class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State",
            noText:"new state"
        }
        updateState = updateState.bind(this)
    }
    render() {
        return (
            <View>
                <View><Text>I am Child</Text></View>
                <View><Text>{this.state.text}</Text></View>
            </View>
        )
    }
}

class Parent extends Component {
    constructor(props) {
        super(props)
    }
    updateChild(text) {
        updateState(text)
    }
    render() {
        return (
            <View>
                <View ><Text>I am Parent</Text></View>
                <TouchableOpacity>
                <Text
                 onPress={ this.updateChild }>Hey</Text>
                 </TouchableOpacity>
                <Child1 />
            </View>
        )
    }
}

export default Parent;