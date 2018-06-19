
import React, { Component } from 'react';
import { StyleSheet, Text,ScrollView } from 'react-native';


class Team_Play_Rules extends Component {
  render() {
    // If you want a stack of  s instead of one-per-one view, activate stack mode
    // stack={true}
    return (
       <ScrollView style={styles.screen}>
         <Text>
        1. 3 Player minimum
        2. Player 1 is the judge
        </Text>
      </ScrollView>
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


export default Team_Play_Rules;
