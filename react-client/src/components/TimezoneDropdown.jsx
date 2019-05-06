import React from 'react';
import moment from 'moment-timezone';

function TimezoneDropdown(props) {
  const allTimezones = moment.tz.names();

  function handleSelection(event) {
    console.log(event.target.value);
    props.selectTimezone(event.target.value, props.userNum);
  }
  return (
    <div>
      <label htmlFor="timezone-dropdown">Choose the time zone of Person {props.userNum}: </label>
      <select id="timezone-dropdown" onChange={handleSelection}>  
      <option>Timezone</option>
      {allTimezones.map(timezone => <option value={timezone} key={timezone}>{timezone}</option>)}
      </select>
    </div>

  );
}

export default TimezoneDropdown;