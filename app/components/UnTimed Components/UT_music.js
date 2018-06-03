
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import data from '../../questions/questions.json';
import shuffle from 'lodash/shuffle';
import SwipeCards from 'react-native-swipe-cards';
import SwitchToggle from 'react-native-switch-toggle';


const shuffledData = shuffle(data);

function itsAlert(){
  alert("alert")
}



class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myState: "Play?",
      toggle: false,
    }
  }

 

  updateState = () => this.setState({
    myState: "",
    answer1: data[0].Options[0],
    answer2: data[0].Options[1],
    answer3: data[0].Options[2],
    toggle: true,
    status: true

  })

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.questions}>{this.props.question}</Text>
        <TouchableOpacity style={[styles.playButtonView, this.state.toggle && styles.buttonViewStateChange]} onPress={this.updateState}>
          <Text style={[styles.playButton, this.state.toggle && styles.answers]}> {this.state.myState} </Text>
          <Text style={styles.answers}>{this.props.Options[0]} </Text>`
          <Text style={styles.answers}>{this.props.Options[1]}</Text>
          <Text style={styles.answers}>{this.props.Options[2]}</Text>
          <Text style={styles.answers}>{this.props.Options[3]}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.noMoreCardsText}>Start again?</Text>
      </View>
    )
  }
}

export default class extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      data: shuffledData,
      switchOn1: false,
      switchOn2: itsAlert()
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F3CB55',
    }
  };
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <View style={styles.screen}>
        <SwipeCards
          cards={this.state.data}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showMaybe={false}
          showNope={false}
          showYup={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3CB55',
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
    backgroundColor: '#9DD12B',
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOffset: { width: 30, height: 30 },
    shadowOpacity: 3,
    shadowRadius: 20,
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
    borderColor: "orange",
    marginLeft: 60,
  },
  answers: {
    fontSize: 21,
    width:300,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    justifyContent: "flex-start",
    color: '#FAFAFF',
    textAlign: "left",
    marginRight: 200,
    borderColor: "transparent",

  },
  questions: {
    fontSize: 27,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',
    textAlign: 'left'
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  linear:{
    flex: 1
  }
});
