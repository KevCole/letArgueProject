import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { styling } from '../../styles/PlayScreenStyles';
import SwipeCards from 'react-native-swipe-cards';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');




export class choose_party extends Component {
    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30, }) }, 1) // scroll view position fix
    };

    static navigationOptions = {
        headerTitle: "Which Party?",
        headerStyle: { 
            backgroundColor: '#FEF79F'
        }
    };

    render() {
        return (
    <View style={styles.screen}>
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

                    <Text style={styling.question}> Bachelorette </Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('Music')}>
                    <Text style={styling.question}> Bachelor </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('Music')}>
                    <Text style={styling.question}> PreGame </Text>
                </TouchableOpacity>

            </ScrollView>
    </View>
            
            

        );
    }
}

const styles = StyleSheet.create({
     screen: {
        flex: 1,
        backgroundColor: '#FEF79F',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    
      },
    view: {
        marginTop: 150,
        margin: 10,
        width: width - 75,
        height: height - 400,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#FF8E0B',
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
        backgroundColor: '#5AC4D3',
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
    
    label: {
        marginTop: 10,
        padding: 10,
        fontSize: 30,
        fontFamily: "Helvetica-Bold"
    }
});

export default choose_party; 
