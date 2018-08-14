import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { styling } from '../styles/PlayScreenStyles';

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
                        right: 10,
                    }}>
                    <View style={styles.cardContainer1}>
                        <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate('MovieType')}>
                            <Text style={styling.question} >Movies</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view2} onPress={() => this.props.navigation.navigate('ChooseMusic')}>
                            <Text style={styling.question}> Music</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardContainer2}>

                        <TouchableOpacity style={styles.view3} onPress={() => this.props.navigation.navigate('TV_Type')}>
                            <Text style={styling.question}>TV</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view4} onPress={() => this.props.navigation.navigate('SportsType')}>
                            <Text style={styling.question}>Sports</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cardContainer3}>

                        <TouchableOpacity style={styles.view5} onPress={() => this.props.navigation.navigate('BacheloretteType')}>
                            <Text style={styling.question}>Bachelorette</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view6} onPress={() => this.props.navigation.navigate('BachelorType')}>
                            <Text style={styling.question}>Bachelor</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.cardContainer4}>
                        <TouchableOpacity style={styles.view7} onPress={() => this.props.navigation.navigate('NinetiesMusicType')}>
                            <Text style={styling.question}>90's Music</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.view8} onPress={() => this.props.navigation.navigate('ChooseParty')}>
                            <Text style={styling.question}>Party</Text>
                        </TouchableOpacity>
                    </View>

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
        width:380
    },
    view: {
        marginTop: 20,
        marginLeft: 16,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F35555',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
    },
    view2: {
        marginLeft: 200,
        marginTop: -138,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F3CB55',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 1
    },
    view3: {

        marginLeft: 15.5,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#4B4DAA',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 1,
    },
    view4: {
        marginLeft: 200,
        marginTop: -138,
        margin: 20,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#44C344',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 1
    },
    view5: {
        marginLeft: 15.5,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#F3CB55',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 3,
        shadowRadius: 1
    },
    view6: {
        marginLeft: 200,
        marginTop: -138,
        width: 160,
        height: 140,
        borderRadius: 20,
        height: height - 530,
        padding: 20,
        backgroundColor: '#F35555',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 1
    },
    view7: {
        marginLeft: 15.5,
        width: 160,
        height: 140,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#44C344',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 3,
        shadowRadius: 1
    },
    view8: {
        marginLeft: 200,
        marginTop: -138,
        margin: 20,
        width: 160,
        height: 140,
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#4B4DAA',
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 2,
        shadowRadius: 1
    },
    label: {
        marginTop: 10,
        padding: 10,
        fontSize: 30,
        fontFamily: "Helvetica-Bold"
    },
    cardContainer1: {
        marginTop: 150,
        width:"auto"
        
       
    },
    cardContainer2: {
        marginTop: 20,
        width:"auto"
       
    },
    cardContainer3:{
        width:"auto"
    },
    cardContainer4:{
        marginTop: 20,
    }


});


export default PlayScreen; 
