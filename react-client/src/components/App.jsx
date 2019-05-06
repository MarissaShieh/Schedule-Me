import React from 'react';
import User from './User.jsx';
import CalculatedTime from './CalculatedTime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [1,2],
      timezone1: 'Africa/Cairo',
      timezone2: 'Europe/Minsk',
      selectedTime1: '01:00',
      selectedTime2: ''
    }
    this.chosenInputs = this.chosenInputs.bind(this);
  }

  componentDidMount() {
  }

  chosenInputs(timezone1, timezone2, selectedTime1, selectedTime2) {
    // this.setState({
      
    // });
  }

  render () {
    return (
      <div>
        {this.state.users.map(user => <User key={user.toString()} userNum={user.toString()} selectedTime1={this.state.selectedTime1} selectedTime2={this.state.selectedTime2}/>)}
        <CalculatedTime users={this.state.users} timezones={[this.state.timezone1, this.state.timezone2]} selectedTimes={[this.state.selectedTime1, this.state.selectedTime2]}/>
      </div>
    );
  }
}

export default App;
