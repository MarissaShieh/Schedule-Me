import React from 'react';
import TimezoneDropdown from './TimezoneDropdown.jsx';
import TimeSelection from './TimeSelection.jsx';

const User = function(props){
  return (
    <div className={`user user${props.userNum}`}>
      <TimezoneDropdown userNum={props.userNum}/>
      <TimeSelection userNum={props.userNum}/>
    </div>
  )
}

export default User