
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import data from '../questions/questions.json';

import SwipeCards from 'react-native-swipe-cards';



class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.questions}>{this.props.question}</Text>
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
      data: data
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4B4DAA',
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
    backgroundColor: '#4B4DAA',
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
    backgroundColor: '#F4CB54',
    shadowColor: 'rgba(0, 0, 0, .5)',
    shadowOffset: { width: 30, height: 30 },
    shadowOpacity: 3,
    shadowRadius: 20,
  },
  questions: {
    fontSize: 30,
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
