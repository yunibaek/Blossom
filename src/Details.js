import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  DatePickerIOS,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TabBarIOS,
  Navigator,
  Switch,
  Animated,
} from 'react-native'
import TabBar from './TabBar'
import styles from './styles'

class Details extends Component {
  constructor() {
    super();
    this.state = {
      yourName: null,
      partnerName: null,
      date: new Date(),
      datePicker: false,
    };
  }

  toggleDatePicker() {
    var mode = !this.state.datePicker;
    this.setState ({datePicker : mode});
  }

  onDateChange(date) {
    this.setState ({date: date});
  }

  //set variables to string aka user inputed data onChangeText()
  onName(str) {
    this.setState({yourName: str});
  }

  onPartnerName(str) {
    this.setState({partnerName: str});
  }

  yourName() {
    return (this.state.yourName !== null ? this.state.yourName : this.props.couple.you.name);
  }

  partnerName() {
    return (this.state.partnerName !== null ? this.state.partnerName : this.props.couple.partner.name);
  }

  onSave() {
    this.props.editCouple({
      "you": {
        "name": this.yourName(),
      },
      "partner": {
        "name": this.partnerName(),
      },
      date: this.props.couple.date,
    });
  }

  navigate() {
    this.props.navigator.push({
      name: 'TabBar',
      component: TabBar,
      //Passes data that user inputed
      passProps: {
        yourName: this.state.yourName,
        partnerName: this.state.partnerName,
        date: this.state.date,

      },
    })
  }

  renderDatePicker() {
    return (
      <View style = {styles.datePicker}>
        <TouchableOpacity onPress = {this.toggleDatePicker.bind(this)} style = {{padding : 5, alignItems: 'flex-end'}}>
         <Text>Done</Text>
        </TouchableOpacity>
        <DatePickerIOS
          date={(this.state && this.state.date) || new Date()}
          onDateChange={(newDate) => {
            this.setState({date: newDate})
          }}
          mode={'date'}
          timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
      </View>
    );
  }

  renderButtonOrDatePicker() {
    if(this.state.datePicker) {
      return this.renderDatePicker();
    }
    return (
      <TouchableHighlight style = {styles.button} onPress = {() => this.onSave()}>
        <Text style = {{color: '#FFF'}}> Start </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.detailsTop}>
          <Text style = {{fontSize: 30, color: 'white', top: 170, borderRadius: 5,}}> Details </Text>
          <Text style = {{fontSize: 13, color: 'white', top: 180}}> Write down your love details </Text>
        </View>
        <TextInput style={styles.nameInput} value={this.yourName()} placeholder="Your name" onChangeText={(str) => this.onName(str)} />
        <TextInput style={styles.nameInput} value={this.partnerName()} placeholder="Partner's name" onChangeText={(str) => this.onPartnerName(str)} />
        <View style = {styles.nameInput}>
        <TouchableWithoutFeedback onPress={this.toggleDatePicker.bind(this)}>
          <View value={this.state.date}>
            <Text style = {{color: '#8F8E94'}}> {(this.state.date.getMonth()+1)}/{this.state.date.getDate()}/{this.state.date.getFullYear()}</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
        {this.renderButtonOrDatePicker()}
      </View>
    );
  }
}

export default Details;
