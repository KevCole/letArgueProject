
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import shuffle from 'lodash/shuffle';
import data from '../data/questions.json';
import SwipeCards from 'react-native-swipe-cards';
import CountdownCircle from 'react-native-countdown-circle'
import SwitchToggle from 'react-native-switch-toggle';



const shuffledData = shuffle(data);


Play = ({ child }) => {
  return (
    <View>
      <Text style={styles.playButton}> {child} </Text>
    </View>
  )
}

class Card extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <View style={styles.clockContainer}>
        {
          this.props.clockStatus ? <CountdownCircle
            seconds={60}
            reStart={true}
            radius={40}
            borderWidth={9}
            color="#F5A974"
            shadowColor="#499A8F"
            bgColor="#F5A974"
            textStyle={{ fontSize: 30, color: "white" }}

          /> : null
        }

        <View style={styles.card}>
          <Text style={styles.questions}>{this.props.question}</Text>


          {/* Answer View*/}
          {this.props.toggleAnswers ?
            <View style={styles.showAnswers}>
              <Text style={styles.answers}>{this.props.Options[0]} </Text>`
                <Text style={styles.answers}>{this.props.Options[1]}</Text>
              <Text style={styles.answers}>{this.props.Options[2]}</Text>
              <Text style={styles.answers}>{this.props.Options[3]}</Text>
            </View> : null}


        </View>
        )
      }
       <TouchableOpacity style={[styles.playButtonView, styles.buttonViewStateChange]} onPress={this.props.triggerToggleQuestions}>

          {
            this.props.isHidden ? <Text style={styles.playButton}> {this.props.playState} </Text> : null
          }



        </TouchableOpacity>
      </View>
    )
  }
}


class pregame extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: shuffledData,
      hello: "hello",
      playState: "Play?",
      toggleAnswers: false,
      isHidden: true,
      clockStatus: false
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F5A974',
    }
  };

  toggleQuestions = () => {
    this.setState({
      toggleAnswers: true,
      isHidden: false,
      clockStatus: true
    })
  }

  sorry = () => {
    this.setState({
      hide: false,
      hello: ""
    })
  }

  reset = () => {
    this.setState({
      playState: "Play?",
      toggleAnswers: false,
      isHidden: true,
      clockStatus: false
    })
  }

  render() {
    // If you want a stack of  s instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <View style={styles.screen}>
        <SwipeCards
          cards={this.state.data}
          renderCard={(cardData) =>
            <Card
              isHidden={this.state.isHidden}
              clockStatus={this.state.clockStatus}
              playState={this.state.playState}
              toggleAnswers={this.state.toggleAnswers}
              clockStatus={this.state.clockStatus}
              triggerToggleQuestions={this.toggleQuestions}
              {...cardData} />}
          showMaybe={false}
          showNope={false}
          showYup={false}
          smoothTransition={false}
          handleNope={this.reset}
          handleYup={this.reset}
        />


      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5A974',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    flex: 0,
    flexDirection: 'column',
    marginTop: 10,
    width: 350,
    height: 350,
    padding: 30,
    borderRadius: 30,
    backgroundColor: '#499A8F',
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
    borderColor: "transparent"
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  linear: {
    flex: 1
  },
  playButtonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",

  },
  showAnswers: {
    marginTop: 50,
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
    borderColor: "#FFFFFF"
  },

});
export default pregame