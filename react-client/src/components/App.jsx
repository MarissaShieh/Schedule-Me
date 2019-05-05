import React from 'react';
import User from './User.jsx';
import CalculatedTime from './CalculatedTime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: [1,2],
      timezone1: '',
      timezone2: '',
      selectedTime1: '',
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
    const users = [];
    let usersLeftToRender = this.state.users.length;
    while (usersLeftToRender > 0) {
      users.unshift(<User key={usersLeftToRender} userNum={usersLeftToRender} selectedTime1={this.state.selectedTime1} selectedTime2={this.state.selectedTime2}/>);
      usersLeftToRender -= 1;
    }

    return (
      <div>
        {users}
        <CalculatedTime users={this.state.users} timezone1={this.state.timezone1} timezone2={this.state.timezone2} selectedTime1={this.state.selectedTime1} selectedTime2={this.state.selectedTime2}/>
      </div>
    );
  }
}

export default App;
