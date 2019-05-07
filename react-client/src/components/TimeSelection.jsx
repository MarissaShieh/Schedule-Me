import React from 'react';
import styles from './TimeSelection.module.css';

class TimeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selectedTime
    }
    // console.log('Time select userNum', this.props.userNum);
    this.handleSelection = this.handleSelection.bind(this);
  };
  
  handleSelection(event){
    const value = event.target.value;
    this.setState({
      value: value
    });
    this.props.selectTime(value, this.props.userNum);
  }

  make24HourClock() {
    const clockArr = [];
    for (let i = 0; i < 10; i++) {
      clockArr.push(`0${i}:00`);
      clockArr.push(`0${i}:30`);
    }
    for (let i = 10; i < 24; i++) {
      clockArr.push(`${i}:00`);
      clockArr.push(`${i}:30`);
    }

    return clockArr;
  }

  render() {
    const clockArr = this.make24HourClock();
    return (
      <div className={styles.selected}>
        <label htmlFor="timeSelection">Choose a time which works for Person {this.props.userNum}: </label>
        <select id="timeSelection" onChange={this.handleSelection} value={this.state.value}> 
          {clockArr.map(time => <option key={time} value={time}>{time}</option>)}
        </select>
      </div>
    );
  }
}

export default TimeSelection;