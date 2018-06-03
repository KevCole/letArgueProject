
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PlayScreen } from './app/components/PlayScreen';
import { styles } from './app/styles/MenuStyles'
import { styling } from './app/styles/PlayScreenStyles'
import { dimensions, colors, fonts } from './app/styles/base';

import settings from './app/components/settings'
import movies from './app/components/movies'
import mixed from './app/components/mixed'
import music from './app/components/music'
import tv from './app/components/tv'
import tester from './app/components/tester'
import whichGame from './app/components/whichGame'
import UTplayScreen from './app/components/UnTimed Components/UT_PlayScreen'

const data = require('./app/questions/questions.json');
const remote = "./app/images/toronto.jpg"

class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4861C9'
    }}
  render() {

    
  
    
    
    return (
      <View style={styles.container}>
      
          <TouchableOpacity onPress={() => this.props.navigation.navigate('WhichGame')}>
            <Text style={styles.text}>
              Play
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('How To Play')} >
            <Text style={styles.text}>
              How To Play
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} >
            <Text style={styles.text}>
              Settings
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}  >
            <Text style={styles.text}>
              About
          </Text>
          </TouchableOpacity>

          </View>

       
      
    )
  }
}

class HowToPlayScreen extends Component {
  render() {
    return (
      <View>
        <text>aye</text>
      </View>
    )
  }
}

class WhichGame extends Component {
  render() {
    return (
      <View>
       <whichGame/>
      </View>
    )
  }
}

class Settings extends Component {
  render() {
    return (
      <settings />
    )
  }
}

class About extends Component {
  render() {
    return (
      <View>
        <Text>About</Text>
      </View>
    )
  }
}

class Movies extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F3CB55',
    }
  };
  render() {
    return (

      <movies />


    )
  }
}

class Music extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F3CB55',
    }
  };
  render() {
    return (

      <movies />


    )
  }
}

class TV extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4B4DAA',
    }
  };
  render() {
    return (
      <View style={tvStyles.screen}>
        <View style={tvStyles.card}>
          <Text style={tvStyles.questions}>My money's in that office, right?</Text>
          <View>
            <Text style={tvStyles.answers}>Yes</Text>
            <Text style={tvStyles.answers}>No</Text>
            <Text style={tvStyles.answers}>Maybe </Text>
          </View>
        </View>
      </View>
    )
  }
}

class Mixed extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#44C344',
    }
  };
  render() {
    return (
      <mixed />
    )
  }
}

class Tester extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#44C344',
    },
    cardStyle: {
      backgroundColor: 'pink',
    },
  };
  render() {
    return (
      <View>
        <tester />
      </View>

    )
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Play: {
      screen: PlayScreen
    },
    WhichGame:{
      screen: whichGame
    },
    "How To Play": {
      screen: HowToPlayScreen
    },
    Settings: {
      screen: settings
    },
    About: {
      screen: About
    },
    Movies: {
      screen: movies
    },
    Music: {
      screen: music
    },
    TV: {
      screen: tv
    },
    Mixed: {
      screen: mixed
    },
    Tester: {
      screen: tester
    },
    Untimed: {
      screen: UTplayScreen
    },

  },
  {
    initialRouteName: 'Movies',
  },
);

const movieStyles = StyleSheet.create({
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
  questions: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',
    textAlign: 'left'
  },

  answers: {
    marginTop: 24,
    padding: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',

  },
  answersContainer: {
    flexDirection: 'column',
    textAlign: 'left'
  },
})

const musicStyles = StyleSheet.create({
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
  questions: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',
    textAlign: 'left'
  },

  answers: {
    marginTop: 24,
    padding: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',

  },
  answersContainer: {
    flexDirection: 'column',
    textAlign: 'left'
  },
})

const tvStyles = StyleSheet.create({
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

  answers: {
    marginTop: 24,
    padding: 1,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#FAFAFF',

  },
  answersContainer: {
    flexDirection: 'column',
    textAlign: 'left'
  },
})


export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


