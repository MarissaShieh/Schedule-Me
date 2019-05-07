import React from 'react';
import User from './User.jsx';
import CalculatedTime from './CalculatedTime.jsx';
import PastSearches from './PastSearches.jsx'
import moment from 'moment';
import $ from 'jquery';
import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [1,2],
      timezone1: 'Africa/Abidjan',
      timezone2: 'Africa/Abidjan',
      selectedTime1: '',
      selectedTime2: '00:00',
      selectedNotCalculated: true,
      calculatedMoments: [moment(), moment()],
      pastSavedSearches: []
    }
    this.selectTimezone = this.selectTimezone.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.finalCalculations = this.finalCalculations.bind(this);
  }

  componentDidMount() {
    if (document.cookie) {
      $.ajax({
        type: 'GET',
        url: '/searches',
        data: {
          cookieID: document.cookie,
        }
      })
        .done((pastSearches) => {
          this.setState({
            pastSavedSearches: pastSearches
          });
        })
        .catch(() => console.log('failed to receive data from database'));

    }
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
    let pastSearches;
    if (this.state.pastSavedSearches.length > 0) {
      pastSearches = <PastSearches pastSearches={this.state.pastSavedSearches}/>;
    }
    return (
      <div className={styles.app}>
        <h1>Time Zone Converter</h1>
        <p><b>Directions: </b>Choose a time zone for <em>both</em> parties. Then choose a time which works for <em>one</em> person. The time zone converter will calculate the other person's time below.</p>
        <div className={styles.users}>
          {this.state.users.map(user => <User key={user.toString()} selectTime={this.selectTime} selectTimezone={this.selectTimezone} userNum={user.toString()} selectedTime={this.state[`selectedTime${user}`]} timezone={this.state[`timezone${user}`]}/>)}
        </div>
        <CalculatedTime users={this.state.users} timezones={[this.state.timezone1, this.state.timezone2]} selectedTimes={[this.state.selectedTime1, this.state.selectedTime2]} notCalculatedYet={this.state.selectedNotCalculated} finalCalculations={this.finalCalculations} calculatedMoments={this.state.calculatedMoments}/>
        {pastSearches}
      </div>
    );
  }
}

export default App;
