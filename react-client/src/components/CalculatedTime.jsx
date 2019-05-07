import React from 'react';
import DisplayCalcTime1 from './DisplayCalcTime1.jsx'
import moment from 'moment-timezone';
import SaveBtn from './SaveBtn.jsx';

class CalculatedTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1Time: this.props.selectedTimes[0],
      user2Time: this.props.selectedTimes[1],
    }
    this.calculateTimesFromInput = this.calculateTimesFromInput.bind(this);
  }

  calculateTimesFromInput(){
    // let DisplayTime;
    if (this.props.notCalculatedYet) {
      let selectedUser;
      let otherUser;
      if (this.props.selectedTimes[0] !== '') {
        selectedUser = 0;
        otherUser = 1;
      } else {
        otherUser = 0;
        selectedUser = 1;
      }
    
      var timeDateInInputCountry = new Date().toLocaleString("en-US", {timeZone: this.props.timezones[selectedUser]});
      var inputCountryDate = timeDateInInputCountry.split(',')[0].split('/');
      //format the dates so that it's ['MM', 'DD', 'YYYY']
      if (inputCountryDate[0].length === 1) {
        inputCountryDate[0] = `0${inputCountryDate[0]}`
      }
      if (inputCountryDate[1].length === 1) {
        inputCountryDate[1] = `0${inputCountryDate[1]}`
      }
      const selectedHour = this.props.selectedTimes[selectedUser].substring(0,2);
      const selectedMinutes = this.props.selectedTimes[selectedUser].substring(3);
    
      const inputUserTime = moment.tz(`${inputCountryDate[2]}-${inputCountryDate[0]}-${inputCountryDate[1]} ${selectedHour}:${selectedMinutes}`, this.props.timezones[selectedUser]);
      // console.log('HERE', inputUserTime.format('MMMM Do YYYY, H:mm a'));
      const calcOtherUserTime = inputUserTime.clone().tz(this.props.timezones[otherUser]);
    
      const calculatedTimes = [];
    
      if (selectedUser === 0) {
        calculatedTimes[0] = inputUserTime;
        calculatedTimes[1] = calcOtherUserTime;
      } else {
        calculatedTimes[0] = calcOtherUserTime;
        calculatedTimes[1] = inputUserTime;
      }

      this.props.finalCalculations(calculatedTimes);
      this.setState({
        user1Time: calculatedTimes[0],
        user2Time: calculatedTimes[1]
      });
    } 
  }

  render() {
    this.calculateTimesFromInput();
    return (
      <div>
        <h4>Time Converted:</h4>
          <DisplayCalcTime1 timezone={this.props.timezones[0]} userNum={1} time={this.props.calculatedMoments[0].format('hh:mm A')}/>
          <DisplayCalcTime1 timezone={this.props.timezones[1]} userNum={2} time={this.props.calculatedMoments[1].format('hh:mm A')}/>
          <SaveBtn timezones={this.props.timezones} times={[this.props.calculatedMoments[0].format('hh:mm A'), this.props.calculatedMoments[1].format('hh:mm A')]}/>
      </div>
    );
  }
}

export default CalculatedTime;
