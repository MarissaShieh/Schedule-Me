import React from 'react';
import DisplayCalcTime1 from './DisplayCalcTime1.jsx'
import moment from 'moment-timezone';

function CalculatedTime (props) {
  // let DisplayTime;
  if (props.notCalculatedYet) {
    let selectedUser;
    let otherUser;
    if (props.selectedTimes[0] !== '') {
      selectedUser = 0;
      otherUser = 1;
    } else {
      otherUser = 0;
      selectedUser = 1;
    }
  
    var timeDateInInputCountry = new Date().toLocaleString("en-US", {timeZone: props.timezones[selectedUser]});
    var inputCountryDate = timeDateInInputCountry.split(',')[0].split('/');
    //format the dates so that it's ['MM', 'DD', 'YYYY']
    if (inputCountryDate[0].length === 1) {
      inputCountryDate[0] = `0${inputCountryDate[0]}`
    }
    if (inputCountryDate[1].length === 1) {
      inputCountryDate[1] = `0${inputCountryDate[1]}`
    }
    const selectedHour = props.selectedTimes[selectedUser].substring(0,2);
    const selectedMinutes = props.selectedTimes[selectedUser].substring(3);
  
    const inputUserTime = moment.tz(`${inputCountryDate[2]}-${inputCountryDate[0]}-${inputCountryDate[1]} ${selectedHour}:${selectedMinutes}`, props.timezones[selectedUser]);
    // console.log('HERE', inputUserTime.format('MMMM Do YYYY, H:mm a'));
    const calcOtherUserTime = inputUserTime.clone().tz(props.timezones[otherUser]);
  
    const calculatedTimes = [];
  
    if (selectedUser === 0) {
      calculatedTimes[0] = inputUserTime;
      calculatedTimes[1] = calcOtherUserTime;
    } else {
      calculatedTimes[0] = calcOtherUserTime;
      calculatedTimes[1] = inputUserTime;
    }
    console.log('right above props.finalCalculations');
    props.finalCalculations(calculatedTimes);
  } 
  // else {
  //   DisplayTime = (
  //     <div>
  //       <DisplayCalcTime1 timezone={props.timezones[0]} userNum={1} time={props.calculatedMoments[0].format('hh:mm A')}/>
  //       <DisplayCalcTime1 timezone={props.timezones[1]} userNum={2} time={props.calculatedMoments[1].format('hh:mm A')}/>
  //     </div>
  //   )
  // }
  console.log('in CalculatedTime');
  return (
    <div>
      <h4>Time Converted:</h4>
        <DisplayCalcTime1 timezone={props.timezones[0]} userNum={1} time={props.calculatedMoments[0].format('hh:mm A')}/>
        <DisplayCalcTime1 timezone={props.timezones[1]} userNum={2} time={props.calculatedMoments[1].format('hh:mm A')}/>
    </div>
  );
}

export default CalculatedTime;
