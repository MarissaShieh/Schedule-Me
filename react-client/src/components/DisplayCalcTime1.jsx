import React from 'react';

function DisplayCalcTime1 (props) {
  const time = props.time || "Please select the time you would like calculated from the dropdown"
  return (
    <div> Person 1:
      <div>Time Zone: {props.timezone}</div>
      <div>Time: {time}</div>
    </div>
  );
}

export default DisplayCalcTime1;