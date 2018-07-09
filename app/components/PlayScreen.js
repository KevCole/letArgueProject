import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { styling } from '../styles/PlayScreenStyles';
import SwipeCards from 'react-native-swipe-cards';




const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');


export class PlayScreen extends Component {
    componentDidMount() {
        setTimeout(() => { this.scrollView.scrollTo({ x: -30, }) }, 1) // scroll view position fix
    };

    static navigationOptions = {
        headerTitle: "Categories",
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
                    snapToInterval={55}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 30,
                    }}>
                    <View style={styles.cardContainer1}>
                        <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate('Movies')}>
                            <Text style={styling.question} >Movies</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('ChooseMusic')}>
                            <Text style={styling.question}> Music</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer2}>

                        <TouchableOpacity style={styles.view3} onPress={() => this.props.navigation.navigate('TV')}>
                            <Text style={styling.question}>TV</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view4} onPress={() => this.props.navigation.navigate('Sports')}>
                            <Text style={styling.question}>Sports</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.view5} onPress={() => this.props.navigation.navigate('ChooseParty')}>
                        <Text style={styling.question}>Party</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.view4} onPress={() => this.props.navigation.navigate('Tester')}>

                        <Text>Show</Text>

                    </TouchableOpacity>
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
        marginLeft: 25,
        width: width - 240,
        height: height - 540,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F35555',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 2,
        shadowRadius: 10,
    },
    view2: {
        marginLeft: 188,
        marginTop: -125,
        width: width - 240,
        height: height - 540,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F3CB55',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 2,
        shadowRadius: 10
    },
    view3: {

        marginLeft: 25,
        width: width - 240,
        height: height - 540,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#4B4DAA',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 2,
        shadowRadius: 10,
    },
    view4: {
        marginLeft: 188,
        marginTop: -125,
        margin: 20,
        width: width - 240,
        height: height - 540,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#44C344',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 2,
        shadowRadius: 10
    },
    view5: {
        marginTop: 150,
        margin: 10,
        width: width - 45,
        height: height - 400,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F5A974',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 3,
        shadowRadius: 20
    },
    label: {
        marginTop: 10,
        padding: 10,
        fontSize: 30,
        fontFamily: "Helvetica-Bold"
    },
    cardContainer1: {
        marginTop: 150,
        paddingBottom:10
    },
    cardContainer2: {
        marginTop: 20
    },


});


export default PlayScreen; 
