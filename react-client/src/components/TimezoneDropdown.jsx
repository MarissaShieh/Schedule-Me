import React from 'react';
import moment from 'moment-timezone';

class TimezoneDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.timezone
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.props.selectTimezone(event.target.value, this.props.userNum);
  }

  render () {
    const allTimezones = moment.tz.names();
    return (
      <div>
        <label htmlFor="timezone-dropdown">Choose the time zone of Person {this.props.userNum}: </label>
        <select id="timezone-dropdown" onChange={this.handleSelection} value={this.state.value}>  
          {allTimezones.map(timezone => <option value={timezone} key={timezone}>{timezone}</option>)}
        </select>
      </div>
    );
  }
};

export default TimezoneDropdown;