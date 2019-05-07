import React from 'react';
import User from './User.jsx';
import CalculatedTime from './CalculatedTime';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [1,2],
      timezone1: 'America/New_York',
      timezone2: 'Asia/Taipei',
      selectedTime1: '',
      selectedTime2: '02:00',
      selectedNotCalculated: true,
      calculatedMoments: [moment(), moment()]
    }
    this.selectTimezone = this.selectTimezone.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.finalCalculations = this.finalCalculations.bind(this);
  }

  componentDidMount() {
  }

  selectTimezone(timezone, userNum) {
    const whichTZ = `timezone${userNum}`;
    this.setState({
      [whichTZ]: timezone
    });
  }

  selectTime(time, userNum) {
    const selectedTime = `selectedTime${userNum}`;
    let unselectOther;
    if (userNum === '2') {
      unselectOther = 'selectedTime1';
    } else {
      unselectOther = 'selectedTime2';
    }
    this.setState({
      [selectedTime]: time,
      [unselectOther]: '',
      selectedNotCalculated: true,
    });
  }

  finalCalculations(timeCalArr) {
    this.setState({
      calculatedMoments: timeCalArr,
      selectedNotCalculated: false,
      selectedTime1: timeCalArr[0].format('HH:mm'),
      selectedTime2: timeCalArr[1].format('HH:mm')
    })
  }

  render () {
    console.log('1 ',this.state.selectedTime1);
    console.log('2 ', this.state.selectedTime2);

    return (
      <div>
        {this.state.users.map(user => <User key={user.toString()} selectTime={this.selectTime} selectTimezone={this.selectTimezone} userNum={user.toString()} selectedTime={this.state[`selectedTime${user}`]} timezone={this.state[`timezone${user}`]}/>)}
        <CalculatedTime users={this.state.users} timezones={[this.state.timezone1, this.state.timezone2]} selectedTimes={[this.state.selectedTime1, this.state.selectedTime2]} notCalculatedYet={this.state.selectedNotCalculated} finalCalculations={this.finalCalculations} calculatedMoments={this.state.calculatedMoments}/>
      </div>
    );
  }
}

export default App;
