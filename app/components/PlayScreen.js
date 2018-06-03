import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { styling } from '../styles/PlayScreenStyles';


import SwipeCards from 'react-native-swipe-cards';




const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const data = require('../questions/questions.json');

export const questionShuffle = () => {
    let i = data.length;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (data.length - 1));
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    return data
    data = data;
};


export class PlayScreen extends Component {
    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30, }) }, 1) // scroll view position fix
    };

    static navigationOptions = {
        headerTitle: "Categories",
        headerStyle: {

        }
    };

    render() {
        return (

            <ScrollView
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.container}
                //pagingEnabled={true}
                horizontal={true}
                decelerationRate={0}
                snapToInterval={width - 10}
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 30,
                    bottom: 0,
                    right: 30,
                }}>

                <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate('Movies')}>

                    <Text style={styling.question} >Movies</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('Music')}>
                    <Text style={styling.question}> Music</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view3} onPress={() => this.props.navigation.navigate('TV')}>
                    <Text style={styling.question}>TV</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view4} onPress={() => this.props.navigation.navigate('Mixed')}>
                    <Text style={styling.question}>Mixed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view4} onPress={() => this.props.navigation.navigate('Tester')}>

                    <Text>Show</Text>

                </TouchableOpacity>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    view: {
        marginTop: 150,
        margin: 10,
        width: width - 75,
        height: height - 400,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#F35555',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 3,
        shadowRadius: 20,
    },
    view2: {
        marginTop: 150,
        margin: 10,
        width: width - 75,
        height: height - 400,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#F3CB55',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 3,
        shadowRadius: 20
    },
    view3: {
        marginTop: 150,
        margin: 10,
        width: width - 75,
        height: height - 400,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#4B4DAA',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 3,
        shadowRadius: 20,
    },
    view4: {
        marginTop: 150,
        margin: 10,
        width: width - 75,
        height: height - 400,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#44C344',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 30, height: 30 },
        shadowOpacity: 3,
        shadowRadius: 20
    },
    label: {
        marginTop: 10,
        padding: 10,
        fontSize: 30,
        fontFamily: "Helvetica-Bold"
    }
});


export default PlayScreen; 
