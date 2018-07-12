
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { PlayScreen } from './app/components/PlayScreen';
import { styles } from './app/styles/MenuStyles'

import movies from './app/components/movies'
import sports from './app/components/sports'
import music from './app/components/music'
import tv from './app/components/tv'
import UT_movies from './app/components/UnTimed Components/UT_movies'
import pregame from './app/components/pregame'
import UT_pregame from './app/components/UnTimed Components/UT_Pregame'
import tester from './app/components/tester'
import whichGame from './app/components/whichGame'
import UTplayScreen from './app/components/UnTimed Components/UT_PlayScreen'
import How_To_Play from './app/components/how_to_play';
import Team_Play_Rules from './app/components/Team_Play_Rules'
import choose_music from './app/components/choose/choose_music'
import choose_party from './app/components/choose/choose_party'
import choose_music_untimed from './app/components/choose/choose_music_untimed'
import choose_party_untimed from './app/components/choose/choose_party_untimed'
import movieType from './app/components/PlayType/movieType'


const data = require('./app/questions/questions.json');
const remote = "./app/images/toronto.jpg"

class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#367AFC'
    }}
  render() {
    return (
      <ImageBackground source={ require( './app/images/Blue_white.jpg')} style={Thestyles.screen}>
      <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Play')}>
            <Text style={styles.play}>
              Play
          </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('HowToPlay')} >
            <Text style={styles.text}>
              How To Play
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}  >
            <Text style={styles.about}>
              About
          </Text>
          </TouchableOpacity>

          </View>
        </ImageBackground>
    )
  }
}

class HowToPlay extends Component {
  render() {
    return (
      <View>
       <HowToPlay/>
      </View>
    )
  }
}

class WhichGame extends Component {
  static navigationOptions = {
  headerStyle: { 
    backgroundColor: '#367AFC'
  }
};
  render() {
    return (
      <View>
       <whichGame/>
      </View>
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

class Sports extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#44C344',
    }
  };
  render() {
    return (
      <sports />
    )
  }
}

class Pregame extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#44C344',
    }
  };
  render() {
    return (
      <pregame />
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
    Sports: {
      screen: sports
    },
    Pregame:{
      screen:pregame
    },
    Tester: {
      screen: tester
    },
    Untimed: {
      screen: UTplayScreen
    },
    UT_Movies:{
      screen:UT_movies
    },
    UT_Pregame:{
      screen:UT_pregame
    },
    HowToPlay:{
      screen:How_To_Play
    },
    TeamPlay: {
      screen: Team_Play_Rules
    },
    ChooseMusic:{
      screen: choose_music
    },
    ChooseParty:{
      screen: choose_party
    },
    ChooseMusic_Untimed:{
      screen: choose_music_untimed
    },
    ChooseParty_Untimed:{
      screen: choose_party_untimed
    },
    MovieType:{
      screen: movieType
    }

  },
  {
    initialRouteName: 'Home',
  },
);

const Thestyles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems:'center'
    
   
  },
})

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


