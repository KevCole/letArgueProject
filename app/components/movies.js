
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import shuffle from 'lodash/shuffle';
import data from '../data/questions.json';
import SwipeCards from 'react-native-swipe-cards';
import CountdownCircle from 'react-native-countdown-circle'
import SwitchToggle from 'react-native-switch-toggle';



const shuffledData = shuffle(data);


Play =({ child }) => {
  return (
    <View>
      <Text style={styles.playButton}> {child} </Text>
    </View>
  )
}


changeHello = () => {
  this.setState({
    myState:"goodbye"
  })
}




class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: "Play?",
      toggleAnswers: false,
      isHidden: true,
      clockStatus: false
    }
  
    changeHello = changeHello.bind(this)
  }

  
  toggleQuestions = () => {
    this.setState({
      toggleAnswers: true,
      isHidden: false,
      clockStatus: true
    })
  }


  render() {
    return (
      <View style={styles.clockContainer}>
        {
          this.state.clockStatus ? <CountdownCircle
            seconds={60}
            reStart={true}
            radius={40}
            borderWidth={9}
            color="#F35555"
            shadowColor="#736BC0"
            bgColor="#F35555"
            textStyle={{ fontSize: 30, color: "white" }}

          /> : null
        }

        <View style={styles.card}>
          <Text style={styles.questions}>{this.props.question}</Text>


          {/* Answer View*/}
          {this.state.toggleAnswers ?
            <View style={styles.showAnswers}>
              <Text style={styles.answers}>{this.props.Options[0]} </Text>`
                <Text style={styles.answers}>{this.props.Options[1]}</Text>
              <Text style={styles.answers}>{this.props.Options[2]}</Text>
              <Text style={styles.answers}>{this.props.Options[3]}</Text>
            </View> : null}


        </View>
        )
      }
       <TouchableOpacity style={[styles.playButtonView, styles.buttonViewStateChange]} onPress={this.toggleQuestions}>

          { 
            this.state.isHidden ? <Play child={this.state.myState} /> : null
          }
        </TouchableOpacity>
      </View>
    )
  }
}


class movies extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: shuffledData,
      hello: "hello"
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F35555',
    }
  };

  sorry = () => {
    this.setState({
      hide: false,
      hello: ""
    })
  }

  reset = () => {
    this.setState({
      hide: true,
      hello: "hello"
    })
  }

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <View style={styles.screen}>
        <SwipeCards
          cards={this.state.data}
          renderCard={(cardData) => <Card {...cardData} />}
          showMaybe={false}
          showNope={false}
          showYup={false}
          smoothTransition={false}
          handleNope={this.reset}
          handleYup={this.reset}
        />
      
          <Play child={this.state.hello} />
     
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


export default movies;
