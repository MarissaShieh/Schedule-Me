import React from 'react';
import TimezoneDropdown from './TimezoneDropdown.jsx';

const User = function(props){
  return (
    <div className={`user user${props.userNum}`}>
      <TimezoneDropdown />
    </div>
  )
}

export default User