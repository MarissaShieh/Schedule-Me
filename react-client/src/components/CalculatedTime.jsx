import React from 'react';
import DisplayCalcTime1 from './DisplayCalcTime1.jsx'
import moment from 'moment-timezone';

function CalculatedTime (props) {
  let selectedUser;
  let otherUser;
  if (props.selectedTimes[0] !== '') {
    selectedUser = 0;
    otherUser = 1;
  } else {
    otherUser = 0;
    selectedUser = 1;
  }

  // let chosenTime = props.timezones[selectedUser];
  let chosenTime = new Date();
  chosenTime.toLocaleString("en-US", {timeZone: props.timezones[selectedUser]});
  const selectedHour = Number(props.selectedTimes[selectedUser].substring(0,2));
  const selectedMinutes = props.selectedTimes[selectedUser].substring(3);
  chosenTime.setHours(selectedHour, selectedMinutes);
  const inputISO = chosenTime.toISOString();
  console.log('chosenTime', chosenTime);

  const inputUserTime = moment.tz(moment(inputISO), props.timezones[selectedUser]);
  const calcOtherUserTime = inputUserTime.clone().tz(props.timezones[otherUser]);

  const calculatedTimes = [];

  if (selectedUser === 0) {
    calculatedTimes[0] = inputUserTime;
    calculatedTimes[1] = calcOtherUserTime;
  } else {
    calculatedTimes[0] = calcOtherUserTime;
    calculatedTimes[1] = inputUserTime;
  }

  return (
    <div>
      <h4>Time Converted:</h4>
      <DisplayCalcTime1 timezone={props.timezones[0]} userNum={1} selectedUser={selectedUser} time={calculatedTimes[0].format()}/>
      <DisplayCalcTime1 timezone={props.timezones[1]} userNum={2} selectedUser={selectedUser} time={calculatedTimes[1].format()}/>
    </div>
  );
}

export default CalculatedTime;
