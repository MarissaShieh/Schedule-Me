import React from 'react';

function DisplayCalcTime1 (props) {
  const time = props.time || "Please select the time you would like calculated from the dropdown"
  console.log('in DisplayCalcTime1');
  return (
    <div> Person {props.userNum}:
      <div>Time Zone: {props.timezone}</div>
      <div>Time: {time}</div>
    </div>
  );
}

export default DisplayCalcTime1;