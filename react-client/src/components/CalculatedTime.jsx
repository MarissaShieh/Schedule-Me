import React from 'react';
import CalcTimePerPerson from './CalcTimePerPerson.jsx'

function CalculatedTime (props) {
  return (
    <div>
      <h4>Time Converted:</h4>
      {props.users.map(user => <CalcTimePerPerson />)}
    </div>
  );
}

export default CalculatedTime;
