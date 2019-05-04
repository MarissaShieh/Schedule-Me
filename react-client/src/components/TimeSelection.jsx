import React from 'react';
import styles from './TimeSelection.module.css';

function TimeSelection (props) {
  const earlyMorning = [];
  for (let time = 5; time <= 8; time++) {
    addToTimeSet(earlyMorning, time);;
  }
  const morning = [];
  for (let time = 8; time < 12; time++) {
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
  for (let time = 23; time < 24; time++) {
    addToTimeSet(overnight, time);;
  }
  for (let time = 0; time < 5; time++) {
    addToTimeSet(overnight, time);;
  }

  function addToTimeSet(timeArray, time) {
    let hour;
    if (time < 10) {
      hour = `0${time}`;
    } else {
      hour = `${time}`;
    }
    timeArray.push(`${hour}:00`);
    timeArray.push(`${hour}:30`);
  }

  return (
    <div className={styles.selected}>
      <label htmlFor="timeSelection">Choose a time which works for Person {props.userNum}: </label>
      <select id="timeSelection"> 
        <optgroup label="Early Morning">
          {earlyMorning.map(time => <option value={time}>{time}</option>)}
        </optgroup>      
        <optgroup label="Morning">
          {morning.map(time => <option value={time}>{time}</option>)}
        </optgroup>
        <optgroup label="Afternoon">
          {afternoon.map(time => <option value={time}>{time}</option>)}
        </optgroup>
        <optgroup label="Evening">
          {evening.map(time => <option value={time}>{time}</option>)}
        </optgroup>
        <optgroup label="Overnight">
          {overnight.map(time => <option value={time}>{time}</option>)}
        </optgroup>
      </select>
    </div>
  );
}

export default TimeSelection;