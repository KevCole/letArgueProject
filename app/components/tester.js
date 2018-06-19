
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import moment from 'moment'


class Child extends Component{
    constructor(props){
        super(props);
    } 
    render(){
        return(
            <View>
                <Text onPress ={this.props.triggerTextUpdate}>Click Me</Text>
            </View>
        )
    }
}



class Parent extends Component{
    constructor(props){
        super(props);
        this.state ={
            text:"i'm the pappy",
            visible:false
        }
        this.updateText = this.updateText.bind(this)
    } 

    updateText =() =>{
        this.setState({
            text:"I'm the mammy",
            visible:true
        })
    }
    render(){
        return(
            <View>
                <Text>
                    {this.state.text}
                </Text>
                {this.state.visible ? <Text>Here we is bwoi </Text> : null}
                <Child triggerTextUpdate ={this.updateText}/>
            </View>
        )
    }
}

export default Parent;