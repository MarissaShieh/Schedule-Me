import React from 'react';
import moment from 'moment-timezone';

function TimezoneDropdown(props) {
  const allTimezones = moment.tz.names();
  return (
    <div>
      <label htmlFor="timezone-dropdown">Choose the time zone of Person {props.userNum}: </label>
      <select id="timezone-dropdown">  
      <option>Timezone</option>
      {allTimezones.map(timezone => <option value={timezone} key={timezone}>{timezone}</option>)}
      </select>
    </div>

  );
}

export default TimezoneDropdown;