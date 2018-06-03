
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    myState: "Play?",
    toggleAnswers: false,
    isHidden: true,
    clockStatus: false
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