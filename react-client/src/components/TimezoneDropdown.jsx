import React from 'react';
import moment from 'moment-timezone';
import styles from './TimezoneDropdown.module.css'

class TimezoneDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.timezone
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.setState({
      value: event.target.value
    });
    this.props.selectTimezone(event.target.value, this.props.userNum);
  }

  render () {
    const allTimezones = moment.tz.names();
    return (
      <div>
        <h4>Person {this.props.userNum}</h4> 
        <label htmlFor="timezone-dropdown">Time zone: </label>
        <select id="timezone-dropdown" onChange={this.handleSelection} value={this.state.value}>  
          {allTimezones.map(timezone => <option value={timezone} key={timezone}>{timezone}</option>)}
        </select>
      </div>
    );
  }
};

export default TimezoneDropdown;