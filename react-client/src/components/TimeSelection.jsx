import React from 'react';
import styles from './TimeSelection.module.css';

function TimeSelection (props) {
  const morning = [];
  for (let time = 7; time < 12; time++) {
    addToTimeSet(morning, time);;
  }
  
  const afternoon = [];
  for (let time = 12; time < 17; time++) {
    addToTimeSet(afternoon, time);;
  }

  const evening = [];
  for (let time = 18; time < 22; time++) {
    addToTimeSet(evening, time);;
  }

  const overnight = [];
  for (let time = 23; time <= 24; time++) {
    addToTimeSet(overnight, time);;
  }
  for (let time = 0; time < 7; time++) {
    addToTimeSet(overnight, time);;
  }

  function addToTimeSet(timeArray, time) {
    let hour;
    const hourSet = [];
    if (time < 10) {
      hour = `0${time}`;
    } else {
      hour = `${time}`;
    }
    hourSet.push(`${hour}:00`);
    hourSet.push(`${hour}:15`);
    hourSet.push(`${hour}:30`);
    hourSet.push(`${hour}:40`);
    timeArray.push(hourSet);
  }

  return (
    <div className={styles.selected}>
      <label htmlFor="timeSelection">Choose a time which works for Person {props.userNum}: </label>
      <select id="timeSelection"> 
        <optgroup label="morning">
          {morning.map( hourSet => hourSet.map((time, i) => {
            let timeToDisplay;
            if (i === 0) {
              timeToDisplay = (<option value={time} className={styles.hourGroup}>{time}</option>);
            } else {
              timeToDisplay = (<option value={time} className="withinHour">{time}</option>);
            }
            return timeToDisplay;
          }))}
        </optgroup>
      </select>
    </div>
  );
}

export default TimeSelection;