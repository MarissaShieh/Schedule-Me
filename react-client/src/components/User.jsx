import React from 'react';
import timezoneDropdown from './TimezoneDropdown.jsx';

const User = function(props){
  return (
    <div className={`user user${props.userNum}`}>
      <timezoneDropdown />
    </div>
  )
}

export default User