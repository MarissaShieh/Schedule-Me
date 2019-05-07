import React from 'react';
import styles from './DisplayCalcTime1.module.css';

function DisplayCalcTime1 (props) {
  const time = props.time || "Please select the time you would like calculated from the dropdown"
  return (
    <div className={styles.box}> <h4>Person {props.userNum}: </h4>
      <div>Time Zone: {props.timezone}</div>
      <div className={styles.time}>Time: {time}</div>
    </div>
  );
}

export default DisplayCalcTime1;