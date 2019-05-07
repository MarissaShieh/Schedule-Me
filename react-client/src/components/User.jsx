import React from 'react';
import TimezoneDropdown from './TimezoneDropdown.jsx';
import TimeSelection from './TimeSelection.jsx';

const User = function(props){
  return (
    <div className={`user user${props.userNum}`}>
      <TimezoneDropdown userNum={props.userNum} selectTimezone={props.selectTimezone} timezone={props.timezone}/>
      <TimeSelection selectedTime={props.selectedTime} userNum={props.userNum} selectTime={props.selectTime}/>
    </div>
  )
}

export default User