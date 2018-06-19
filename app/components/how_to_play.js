import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
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


export class How_To_Play extends Component {
    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30, }) }, 1) // scroll view position fix
    };

    static navigationOptions = {
        headerTitle: "How To Play",
        headerStyle: {
            backgroundColor: '#E858C4'
        }
    };

    render() {
        return (
            <ImageBackground source={require('../images/purple_teal.jpg')} style={styles.screen}>
                <ScrollView
                    ref={(scrollView) => { this.scrollView = scrollView; }}
                    style={styles.container}
                    //pagingEnabled={true}
                    horizontal={false}
                    decelerationRate={0}
                    snapToInterval={width - 30}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                    <View style={styles.view}>
                    <Text style={styles.bold}>Players:</Text>
                    <Text></Text>
                        <Text style={styles.text}>3 players at minimum </Text>
                        <Text></Text>
                        <Text style={styles.text}>-Player 1 is the judge</Text>
                        <Text></Text>
                        <Text style={styles.text}>-Remaining players split into seperate teams (Teams can be in various multitudes)rebuttal</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The player oldest in age determines the number of minutes set on clock for deliberation and rebuttal</Text>
                        <Text></Text>
                        <Text style={styles.bold}>GAME RULES:</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The JUDGE reads the questions & answers to both teams</Text>
                        <Text></Text>
                        <Text style={styles.text}>-Each TEAM deliberates, for the allotted time determined at the beginning of the game, to present their answer to the judge</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The JUDGE will determine which TEAM made the winning argument</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The winning TEAM receives 2 points</Text>
                        <Text></Text>
                        <Text style={styles.text}>***The losing TEAM can argue a rebuttal before next question is asked. If the JUDGE is swayed by the argument, the losing TEAM is given 2 points and the initial winning TEAM is deducted -1 point</Text>
                        <Text></Text>
                        <Text style={styles.text}>-Team with the most points at end of game win</Text>
                        <Text></Text>
                        <Text style={styles.bold}>JUDGE RULES:</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The JUDGE is the time and score keeper</Text>
                        <Text></Text>
                        <Text style={styles.text}>-The judge may deduct points should he or she see that the opposing team or individual is still deliberating after the allotted time has ended </Text>
                        <Text></Text>
                        <Text style={styles.text}>-Additional time cannot be added </Text>
                    </View>
                </ScrollView>
            </ImageBackground>



        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F35555',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    view: {
        marginTop: 150,
        padding:30,
        width:400,
        flexDirection: 'column',
        margin:'auto',
        backgroundColor: '#E858C4',
    },
    label: {
        marginTop: 10,
        padding: 10,
        fontSize: 30,
        fontFamily: "Helvetica-Bold"
    },

    text: {
        fontSize: 20,
        color:'#F0FFF0',
    },
    bold:{
        fontSize: 25,
        color:'black'
    }
});


export default How_To_Play; 
