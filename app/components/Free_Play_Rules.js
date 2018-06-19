
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import shuffle from 'lodash/shuffle';
import data from '../data/questions.json';
import SwipeCards from 'react-native-swipe-cards';
import CountdownCircle from 'react-native-countdown-circle'
import SwitchToggle from 'react-native-switch-toggle';



class Free_Play_Rules extends Component {



  render() {
    // If you want a stack of  s instead of one-per-one view, activate stack mode
    // stack={true}
    return (
       <View style={styles.screen}>
        <Text sty>
        The JUDGE reads the questions & answers to both teams
Each TEAM deliberates, for the allotted time determined at the beginning of the game, to present their answer to the judge
The JUDGE will determine which TEAM made the winning argument
The winning TEAM receives 2 points
***The losing TEAM can argue a rebuttal before next question is asked. If the JUDGE is swayed by the argument, the losing TEAM is given 2 points and the initial winning TEAM is deducted -1 point
Team with the most points at end of game wins
JUDGE RULES:
The JUDGE is the time and score keeper
The judge may deduct points should he or she see that the opposing team or individual is still deliberating after the allotted time has ended 
Additional time cannot be added

        </Text>
      </View>
    )
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
  card: {
    flex: 0,
    flexDirection: 'column',
    marginTop: 10,
    width: 350,
    height: 350,
    padding: 30,
    borderRadius: 30,
    backgroundColor: '#736BC0',
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOffset: { width: 30, height: 30 },
    shadowOpacity: 3,
    shadowRadius: 20,
  },
  clockContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  questions: {
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',
    textAlign: 'left',
  },

  buttonViewStateChange: {
    flex: 1,
    justifyContent: "flex-start",

  },
  noMoreCardsText: {
    fontSize: 22,
  },

  playButtonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",

  },
  playButton: {

    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginTop: 20,
    padding: 10,
    width: 150,
    borderRadius: 10,
    textAlign: "center",
    color: "#FAFAFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  answers: {
    fontSize: 21,
    width: 300,
    padding: 1.5,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    justifyContent: "flex-start",
    color: '#FAFAFF',
    textAlign: "left",
    marginRight: 200,
    borderColor: "transparent",
  },
  showAnswers: {
    marginTop: 50,
  }
})


export default Free_Play_Rules;
