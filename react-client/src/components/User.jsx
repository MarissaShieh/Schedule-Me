import React from 'react';
import TimezoneDropdown from './TimezoneDropdown.jsx';
import TimeSelection from './TimeSelection.jsx';
import styles from './User.module.css'

const User = function(props){
  return (
    <div className={styles.user}>
      <TimezoneDropdown userNum={props.userNum} selectTimezone={props.selectTimezone} timezone={props.timezone}/>
      <TimeSelection selectedTime={props.selectedTime} userNum={props.userNum} selectTime={props.selectTime}/>
    </div>
  )
}

export default User